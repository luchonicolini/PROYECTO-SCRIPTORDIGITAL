import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(80, "El nombre es demasiado largo."),
    email: z.string().trim().email("Ingresa un email válido.").max(254, "El email es demasiado largo."),
    service: z.string().trim().max(50).optional(),
    message: z.string().trim()
        .min(10, "Cuéntanos un poco más (mín. 10 caracteres).")
        .max(500, "El mensaje no puede superar los 500 caracteres."),
    company_role: z.string().max(100).optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
