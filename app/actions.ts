"use server"

import { Resend } from "resend"
import { contactSchema } from "@/lib/contact-schema"

const resend = new Resend(process.env.RESEND_API_KEY)

// Utility to escape HTML and prevent XSS in email templates
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

// WhatsApp Notification Helper
async function sendWhatsAppNotification(name: string, service: string, email: string) {
    const phone = process.env.WHATSAPP_PHONE_NUMBER
    const apikey = process.env.WHATSAPP_API_KEY

    if (!phone || !apikey) {
        console.warn("WhatsApp credentials not configured. Skipping WhatsApp notification.")
        return
    }

    const message = `🚨 *NUEVA CONSULTA - SCRIPTOR DIGITAL* 🚨\n\n*Nombre:* ${name}\n*Email:* ${email}\n*Servicio:* ${service}\n\n👉 Revisa el correo electrónico para ver el mensaje completo.`
    const encodedMessage = encodeURIComponent(message)
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apikey}`

    try {
        const response = await fetch(url, { method: "GET" })
        if (!response.ok) {
            console.error("Failed to send WhatsApp notification. Status:", response.status)
        } else {
            console.log("WhatsApp notification sent successfully.")
        }
    } catch (error) {
        console.error("Error sending WhatsApp notification:", error)
    }
}

export async function sendEmail(formData: FormData) {
    const submission = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        service: formData.get("service"),
        message: formData.get("message"),
        company_role: formData.get("company_role"),
    })

    if (!submission.success) {
        return { error: "Revisa los datos ingresados e intenta nuevamente." }
    }

    const { name, email, service, message, company_role: honeypot } = submission.data

    // HONEYPOT CHECK: If the hidden field is filled, it's a bot.
    // Silently return success to not alert the bot.
    if (honeypot) {
        console.log("Spam attempt blocked (Honeypot caught)")
        return { success: true }
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured.")
        return { error: "El formulario no está disponible temporalmente." }
    }

    // Escape user input before inserting into HTML
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeService = escapeHtml(service || "No especificado")
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
          <p><strong>Servicio de Interés:</strong> ${safeService}</p>
          <hr />
          <h3>Mensaje:</h3>
          <p>${safeMessage.replace(/\r?\n/g, "<br />")}</p>
        </div>
      `,
        })

        if (data.error) {
            return { error: data.error.message }
        }

        // Send WhatsApp Notification in the background (fire and forget)
        sendWhatsAppNotification(name, service || "No especificado", email).catch(console.error)

        return { success: true, data }
    } catch {
        return { error: "Error al enviar el email" }
    }
}
