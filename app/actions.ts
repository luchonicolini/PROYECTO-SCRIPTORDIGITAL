"use server"

import { Resend } from "resend"
import { contactSchema } from "@/lib/contact-schema"

// Utility to escape HTML and prevent XSS in email templates
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

type WhatsAppNotificationResult = {
    sent: boolean
    reason: "sent" | "not_configured" | "provider_error" | "timeout" | "network_error"
}

// Internal notification through CallMeBot. A failure here must never discard a valid contact email.
async function sendWhatsAppNotification(name: string, service: string, email: string): Promise<WhatsAppNotificationResult> {
    const phone = process.env.WHATSAPP_PHONE_NUMBER
    const apikey = process.env.WHATSAPP_API_KEY

    if (!phone || !apikey) {
        console.warn("WhatsApp credentials not configured. Skipping WhatsApp notification.")
        return { sent: false, reason: "not_configured" }
    }

    const message = `🔔 *NUEVA CONSULTA — SCRIPTOR DIGITAL*\n\n*Nombre:* ${name}\n*Email:* ${email}\n*Servicio:* ${service}\n\nRevisá el correo para ver el mensaje completo.`
    const url = new URL("https://api.callmebot.com/whatsapp.php")
    url.searchParams.set("phone", phone.replace(/[\s()-]/g, ""))
    url.searchParams.set("text", message)
    url.searchParams.set("apikey", apikey)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8_000)

    try {
        const response = await fetch(url, {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
        })

        if (!response.ok) {
            console.error("CallMeBot rejected the WhatsApp notification. Status:", response.status)
            return { sent: false, reason: "provider_error" }
        }

        console.log("WhatsApp notification accepted by CallMeBot.")
        return { sent: true, reason: "sent" }
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            console.error("CallMeBot WhatsApp notification timed out.")
            return { sent: false, reason: "timeout" }
        }

        console.error("Could not reach CallMeBot for the WhatsApp notification.")
        return { sent: false, reason: "network_error" }
    } finally {
        clearTimeout(timeout)
    }
}

export async function sendEmail(formData: FormData) {
    const honeypot = formData.get("company_role")

    // Silently accept automated submissions caught by the hidden field.
    if (typeof honeypot === "string" && honeypot) {
        console.log("Spam attempt blocked (Honeypot caught)")
        return { success: true }
    }

    const submission = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        stage: formData.get("stage"),
        timeframe: formData.get("timeframe"),
        message: formData.get("message"),
        company_role: formData.get("company_role"),
        privacy: formData.get("privacy") === "true",
    })

    if (!submission.success) {
        return { error: "Revisa los datos ingresados e intenta nuevamente." }
    }

    const { name, email, phone, service, stage, timeframe, message } = submission.data

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured.")
        return { error: "El formulario no está disponible temporalmente." }
    }

    // Instantiate the client only after confirming the secret exists. This prevents
    // a missing local variable from crashing the complete server action module.
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Escape user input before inserting into HTML
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || "No informado")
    const safeService = escapeHtml(service || "No especificado")
    const safeStage = escapeHtml(stage || "No especificada")
    const safeTimeframe = escapeHtml(timeframe || "No especificado")
    const safeMessage = escapeHtml(message)

    try {
        const data = await resend.emails.send({
            from: "Scriptor Digital <onboarding@resend.dev>", // Default for unverified domains
            to: ["scriptordigitaloficial@gmail.com"],
            subject: `Nuevo contacto de: ${safeName} - ${safeService}`,
            replyTo: email,
            html: `
        <div>
          <h1>Nuevo Mensaje de Contacto</h1>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Teléfono:</strong> ${safePhone}</p>
          <p><strong>Servicio de Interés:</strong> ${safeService}</p>
          <p><strong>Etapa del proyecto:</strong> ${safeStage}</p>
          <p><strong>Plazo:</strong> ${safeTimeframe}</p>
          <hr />
          <h3>Mensaje:</h3>
          <p>${safeMessage.replace(/\r?\n/g, "<br />")}</p>
        </div>
      `,
        })

        if (data.error) {
            return { error: data.error.message }
        }

        // Wait for the provider so the serverless function is not terminated before dispatch.
        // Notification errors are reported separately and never invalidate the contact email.
        const whatsappNotification = await sendWhatsAppNotification(
            name,
            service || "No especificado",
            email
        )

        return {
            success: true,
            data,
            whatsappNotification: whatsappNotification.sent,
        }
    } catch {
        return { error: "Error al enviar el email" }
    }
}
