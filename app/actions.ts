"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string
    const honeypot = formData.get("company_role") as string

    // HONEYPOT CHECK: If the hidden field is filled, it's a bot.
    // Silently return success to not alert the bot.
    if (honeypot) {
        console.log("Spam attempt blocked (Honeypot caught)")
        return { success: true }
    }

    if (!name || !email || !message) {
        return { error: "Faltan campos requeridos" }
    }

    try {
        const data = await resend.emails.send({
            from: "Scriptor Digital <onboarding@resend.dev>", // Default for unverified domains
            to: ["scriptordigitaloficial@gmail.com"],
            subject: `Nuevo contacto de: ${name} - ${service || "General"}`,
            replyTo: email,
            html: `
        <div>
          <h1>Nuevo Mensaje de Contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Servicio de Interés:</strong> ${service || "No especificado"}</p>
          <hr />
          <h3>Mensaje:</h3>
          <p>${message}</p>
        </div>
      `,
        })

        if (data.error) {
            return { error: data.error.message }
        }

        return { success: true, data }
    } catch (error) {
        return { error: "Error al enviar el email" }
    }
}
