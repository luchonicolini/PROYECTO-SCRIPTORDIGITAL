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

// Floating Label Input Component - Refined for NOVA Glass
const FloatingInput = ({ label, ...props }: React.ComponentProps<typeof Input> & { label: string }) => (
    <div className="relative group">
        <Input
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
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")

    // Services choices
    const services = [
        { id: "tesis", label: "Tesis & Posgrado" },
        { id: "legal", label: "Gestión Legal" },
        { id: "web", label: "Desarrollo & Apps" },
        { id: "consultoria", label: "Consultoría" },
    ]

    return (
        <Dialog onOpenChange={(open) => {
            if (!open) {
                // Reset state when modal closes
                setTimeout(() => {
                    setIsSuccess(false)
                    setMessage("")
                    setSelectedService(null)
                }, 300)
            }
        }}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="w-full h-[100dvh] sm:h-auto sm:max-w-5xl sm:max-h-[90vh] p-0 bg-background border-white/10 text-foreground overflow-hidden shadow-2xl block rounded-none sm:rounded-3xl">

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
                            {/* Hide description on very small screens if needed, mostly ok to keep but maybe shorten line height */}
                            <DialogDescription className="hidden md:block text-muted-foreground text-lg leading-relaxed font-light">
                                Cuéntanos tu desafío. Nosotros diseñamos la solución técnica y académica a medida.
                            </DialogDescription>
                        </div>

                        {/* Contact details - Hidden on mobile to save space, focus on form */}
                        <div className="relative z-10 space-y-6 mt-6 hidden md:block">
                            {[
                                { icon: Mail, label: "EMAIL", value: "hola@scriptordigital.com", color: "text-secondary" },
                                { icon: MessageCircle, label: "WHATSAPP", value: "+54 9 11 1234 5678", color: "text-primary" },
                                { icon: MapPin, label: "OFICINAS", value: "Buenos Aires • Madrid", color: "text-muted-foreground" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-300">
                                        <item.icon className={cn("w-5 h-5 transition-colors", item.color)} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-muted-foreground/60 tracking-widest mb-1">{item.label}</div>
                                        <div className="text-foreground/90 font-medium text-sm">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicator - Mobile/Desktop */}
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
                            <form
                                action={async (formData) => {
                                    setIsSubmitting(true)
                                    // Add selected service to formData
                                    if (selectedService) {
                                        formData.append("service", selectedService)
                                    }

                                    import("@/app/actions").then(async ({ sendEmail }) => {
                                        const result = await sendEmail(formData)

                                        setIsSubmitting(false)
                                        if (result?.success) {
                                            setIsSuccess(true)
                                            // No auto-close, let user see the success message
                                        } else {
                                            // Handle error (could add toast here)
                                            console.error(result?.error)
                                            alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.")
                                        }
                                    })
                                }}
                                className="max-w-xl mx-auto space-y-8"
                            >

                                {/* Personal Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FloatingInput name="name" label="Nombre Completo" required />
                                    <FloatingInput name="email" label="Email Profesional" type="email" required />
                                </div>

                                {/* Service Selection (Visual Chips) */}
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block ml-1">
                                        ¿Qué estás buscando?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((service) => (
                                            <button
                                                type="button"
                                                key={service.id}
                                                onClick={() => setSelectedService(service.id)}
                                                className={cn(
                                                    "px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border transition-all duration-200",
                                                    selectedService === service.id
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
                                <div className="relative group">
                                    <Textarea
                                        name="message"
                                        className="min-h-[160px] pt-4 px-4 bg-muted/5 border-white/10 text-foreground placeholder:text-muted-foreground/20 focus-visible:ring-primary/30 rounded-xl resize-none font-light"
                                        placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                                        required
                                        maxLength={500}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className="absolute bottom-3 right-3 text-[10px] text-muted-foreground font-mono">
                                        {message.length}/500
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 font-bold tracking-wide rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] bg-primary hover:bg-primary/90 text-primary-foreground"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Enviar Solicitud
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    )}
                                </Button>

                            </form>
                        )}
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}

