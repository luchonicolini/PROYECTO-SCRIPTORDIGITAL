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
            className="peer h-14 pt-4 px-4 bg-white/5 border-white/10 text-white placeholder-transparent focus:border-violet-500/50 focus:ring-0 transition-all rounded-xl"
            placeholder=" "
        />
        <label className="absolute left-4 top-4 text-white/40 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-violet-400 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-400 pointer-events-none">
            {label}
        </label>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/0 peer-focus:ring-violet-500/30 transition-all pointer-events-none" />
    </div>
)

export function ContactModal({ children }: { children: React.ReactNode }) {
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Services choices
    const services = [
        { id: "tesis", label: "Tesis & Posgrado" },
        { id: "legal", label: "Gestión Legal" },
        { id: "web", label: "Desarrollo & Apps" },
        { id: "consultoria", label: "Consultoría" },
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="sm:max-w-5xl p-0 bg-[#0a0f1c] border-white/10 text-white overflow-hidden shadow-2xl block rounded-3xl">

                {/* Custom Close Button */}
                <DialogClose className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-0">
                    <X className="w-6 h-6" />
                </DialogClose>

                <div className="flex flex-col md:flex-row h-full md:min-h-[600px] max-h-[90vh]">

                    {/* Left Column: Branding (Obsidian Glass) */}
                    <div className="w-full md:w-[40%] bg-black/40 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden backdrop-blur-md border-r border-white/5">

                        {/* Background Effects - Subtle Violet/Gold */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-900/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                                Contacto Directo
                            </span>
                            <DialogTitle className="font-heading text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                                Hablemos de <br />
                                <span className="font-serif italic text-white/60">
                                    Excelencia.
                                </span>
                            </DialogTitle>
                            <DialogDescription className="text-gray-400 text-lg leading-relaxed font-light">
                                Cuéntanos tu desafío. Nosotros diseñamos la solución técnica y académica a medida.
                            </DialogDescription>
                        </div>

                        <div className="relative z-10 space-y-6 mt-12 md:mt-0">
                            {[
                                { icon: Mail, label: "EMAIL", value: "hola@scriptordigital.com", color: "text-violet-400" },
                                { icon: MessageCircle, label: "WHATSAPP", value: "+54 9 11 1234 5678", color: "text-[#D4AF37]" },
                                { icon: MapPin, label: "OFICINAS", value: "Buenos Aires • Madrid", color: "text-white/60" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-300">
                                        <item.icon className={cn("w-5 h-5 transition-colors", item.color)} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-white/30 tracking-widest mb-1">{item.label}</div>
                                        <div className="text-white/90 font-medium text-sm">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicator */}
                        <div className="mt-12 pt-8 border-t border-white/5 relative z-10 hidden md:block">
                            <div className="flex items-center gap-2 text-white/40 text-xs">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]/80" />
                                <span>Respuesta garantizada en <span className="text-white/60">24hs</span>.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex-1 bg-[#0a0f1c] p-8 pt-20 md:p-12 md:pt-24 overflow-y-auto custom-scrollbar">
                        <div className="max-w-xl mx-auto space-y-8">

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FloatingInput label="Nombre Completo" />
                                <FloatingInput label="Email Profesional" type="email" />
                            </div>

                            {/* Service Selection (Visual Chips) */}
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block ml-1">
                                    ¿Qué estás buscando?
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setSelectedService(service.id)}
                                            className={cn(
                                                "px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border transition-all duration-200",
                                                selectedService === service.id
                                                    ? "bg-[#D4AF37] border-[#D4AF37] text-[#050511] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
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
                                    className="min-h-[160px] pt-4 px-4 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-violet-500/30 rounded-xl resize-none font-light"
                                    placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                                />
                                <div className="absolute bottom-3 right-3 text-[10px] text-gray-600 font-mono">
                                    0/500
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                onClick={() => {
                                    setIsSubmitting(true)
                                    // Simulate network request
                                    setTimeout(() => {
                                        setIsSubmitting(false)
                                        setIsSuccess(true)
                                        // Reset after showing success
                                        setTimeout(() => {
                                            setIsSuccess(false)
                                            // Optional: Close modal here if you can access the close trigger
                                        }, 4000)
                                    }, 2000)
                                }}
                                disabled={isSubmitting || isSuccess}
                                className={cn(
                                    "w-full h-14 font-bold tracking-wide rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]",
                                    isSuccess
                                        ? "bg-green-500 hover:bg-green-600 text-white"
                                        : "bg-[#D4AF37] hover:bg-[#E5C158] text-[#050511]"
                                )}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : isSuccess ? (
                                    <span className="flex items-center justify-center gap-2">
                                        ¡Mensaje Enviado!
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Enviar Solicitud
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                )}
                            </Button>

                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}

