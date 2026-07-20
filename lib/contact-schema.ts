import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(80, "El nombre es demasiado largo."),
    email: z.string().trim().email("Ingresá un email válido.").max(254, "El email es demasiado largo."),
    phone: z.string().trim().max(30, "El teléfono es demasiado largo.").optional(),
    service: z.string().trim().max(50).optional(),
    stage: z.string().trim().max(40).optional(),
    timeframe: z.string().trim().max(40).optional(),
    message: z.string().trim()
        .min(10, "Contanos un poco más (mín. 10 caracteres).")
        .max(500, "El mensaje no puede superar los 500 caracteres."),
    company_role: z.string().max(100).optional(),
    privacy: z.boolean().refine((accepted) => accepted, "Necesitamos tu consentimiento para responder la consulta."),
})

export type ContactFormValues = z.infer<typeof contactSchema>
