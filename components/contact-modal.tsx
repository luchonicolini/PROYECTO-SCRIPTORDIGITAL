"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, MapPin, CheckCircle2, ArrowRight, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
// New imports for Form
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// Server action
import { sendEmail } from "@/app/actions"

// Schema definition
const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Ingresa un email válido."),
    service: z.string().optional(),
    message: z.string()
        .min(10, "Cuéntanos un poco más (min. 10 caracteres).")
        .max(500, "El mensaje no puede superar los 500 caracteres."),
    // Honeypot field (hidden from users)
    company_role: z.string().optional(),
})

// Custom Floating Label Input for React Hook Form
const FloatingFormInput = ({ field, label, ...props }: any) => (
    <div className="relative group">
        <Input
            {...field}
            {...props}
            className="peer h-14 pt-4 px-4 bg-muted/5 border-white/10 text-foreground placeholder-transparent focus:border-primary/50 focus:ring-0 transition-all rounded-xl"
            placeholder=" "
        />
        <label className="absolute left-4 top-4 text-muted-foreground/60 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">
            {label}
        </label>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/0 peer-focus:ring-primary/30 transition-all pointer-events-none" />
    </div>
)

export function ContactModal({ children }: { children: React.ReactNode }) {
    const [isSuccess, setIsSuccess] = useState(false)

    // Services choices
    const services = [
        { id: "tesis", label: "Tesis & Posgrado" },
        { id: "legal", label: "Gestión Legal" },
        { id: "web", label: "Desarrollo & Apps" },
        { id: "consultoria", label: "Consultoría" },
    ]

    // Form initialization
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            service: "",
            message: "",
            company_role: "", // Honeypot default
        },
    })

    const messageLength = form.watch("message").length

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Create FormData from values to match server action signature
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("email", values.email)
        formData.append("service", values.service || "")
        formData.append("message", values.message)
        // Honeypot
        formData.append("company_role", values.company_role || "")

        const result = await sendEmail(formData)

        if (result?.success) {
            setIsSuccess(true)
            form.reset()
        } else {
            console.error(result?.error)
            alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.")
        }
    }

    return (
        <Dialog onOpenChange={(open) => {
            if (!open) {
                // Reset state when modal closes
                setTimeout(() => {
                    setIsSuccess(false)
                    form.reset()
                }, 300)
            }
        }}>
            <DialogTrigger asChild suppressHydrationWarning>
                {children}
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="w-full h-[100dvh] sm:h-auto sm:max-w-5xl sm:max-h-[90vh] p-0 bg-background border-white/10 text-foreground overflow-hidden shadow-2xl block rounded-none sm:rounded-3xl z-[200]">

                {/* Custom Close Button */}
                <DialogClose className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 rounded-full bg-black/20 hover:bg-white/10 transition-colors text-foreground focus:outline-none focus:ring-0">
                    <X className="w-6 h-6" />
                </DialogClose>

                <div className="flex flex-col md:flex-row h-full">

                    {/* Left Column: Branding (Obsidian Glass) */}
                    <div className="w-full md:w-[40%] bg-black/20 p-6 md:p-12 flex flex-col justify-between relative overflow-hidden backdrop-blur-md border-b md:border-b-0 md:border-r border-white/5 shrink-0">

                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 pt-8 md:pt-0">
                            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 block">
                                Contacto Directo
                            </span>
                            <DialogTitle className="font-heading text-2xl md:text-5xl font-medium text-foreground mb-4 md:mb-6 leading-tight">
                                Hablemos de <br />
                                <span className="font-serif italic text-muted-foreground">
                                    Excelencia.
                                </span>
                            </DialogTitle>
                            <DialogDescription className="hidden md:block text-muted-foreground text-lg leading-relaxed font-light">
                                Cuéntanos tu desafío. Nosotros diseñamos la solución técnica y académica a medida.
                            </DialogDescription>
                        </div>

                        {/* Contact details */}
                        <div className="relative z-10 space-y-6 mt-6 hidden md:block">
                            {[
                                { icon: Mail, label: "EMAIL", value: "scriptordigitaloficial@gmail.com", color: "text-secondary", href: "mailto:scriptordigitaloficial@gmail.com" },
                                { icon: MessageCircle, label: "WHATSAPP", value: "+54 9 11 3420 6516", color: "text-primary", href: "https://wa.me/5491134206516" },
                                { icon: MapPin, label: "OFICINAS", value: "Buenos Aires • Madrid", color: "text-muted-foreground" }
                            ].map((item, idx) => {
                                const Wrapper = item.href ? "a" : "div"
                                return (
                                    <Wrapper
                                        key={idx}
                                        href={item.href}
                                        target={item.href?.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className={cn(
                                            "flex items-center gap-4 group transition-all duration-300",
                                            item.href ? "cursor-pointer hover:translate-x-1" : "cursor-default"
                                        )}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-300">
                                            <item.icon className={cn("w-5 h-5 transition-colors", item.color)} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-muted-foreground/60 tracking-widest mb-1">{item.label}</div>
                                            <div className="text-foreground/90 font-medium text-sm group-hover:text-primary transition-colors">{item.value}</div>
                                        </div>
                                    </Wrapper>
                                )
                            })}
                        </div>

                        {/* Trust Indicator */}
                        <div className="relative z-10 mt-4 md:mt-0 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground">Respuesta en max. 24hs</span>
                        </div>
                    </div>

                    {/* Right Column: Form or Success State */}
                    <div className="flex-1 bg-background p-8 pt-20 md:p-12 md:pt-24 overflow-y-auto custom-scrollbar relative">
                        {isSuccess ? (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-heading font-medium text-foreground mb-2">
                                    ¡Mensaje Recibido!
                                </h3>
                                <p className="text-muted-foreground max-w-sm mx-auto mb-8 font-light">
                                    Gracias por contactarnos. Hemos recibido tu solicitud correctamente y te responderemos a la brevedad.
                                </p>
                                <DialogClose asChild>
                                    <Button variant="outline" className="rounded-xl px-8 border-white/10 hover:bg-white/5">
                                        Cerrar
                                    </Button>
                                </DialogClose>
                            </div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-8">

                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* HONEYPOT - Invisible Field */}
                                        <FormField
                                            control={form.control}
                                            name="company_role"
                                            render={({ field }) => (
                                                <FormItem className="absolute opacity-0 -z-50 w-[1px] h-[1px] overflow-hidden p-0 m-0 pointer-events-none">
                                                    <FormControl>
                                                        <Input {...field} tabIndex={-1} autoComplete="off" />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <FloatingFormInput field={field} label="Nombre Completo" />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <FloatingFormInput field={field} label="Email Profesional" type="email" />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Service Selection */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block ml-1">
                                            ¿Qué estás buscando?
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {services.map((service) => (
                                                <button
                                                    type="button"
                                                    key={service.id}
                                                    onClick={() => form.setValue("service", service.id)}
                                                    className={cn(
                                                        "px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border transition-all duration-200",
                                                        form.watch("service") === service.id
                                                            ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                                            : "bg-muted/5 border-white/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                                                    )}
                                                >
                                                    {service.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="relative group">
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        className="min-h-[160px] pt-4 px-4 bg-muted/5 border-white/10 text-foreground placeholder:text-muted-foreground/20 focus-visible:ring-primary/30 rounded-xl resize-none font-light"
                                                        placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                                                    />
                                                </FormControl>
                                                <div className="absolute bottom-3 right-3 text-[10px] text-muted-foreground font-mono">
                                                    {messageLength}/500
                                                </div>
                                                <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={form.formState.isSubmitting}
                                        className="w-full h-14 font-bold tracking-wide rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        {form.formState.isSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Enviar Solicitud
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        )}
                                    </Button>

                                </form>
                            </Form>
                        )}
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}

