"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle, CheckCircle, ArrowRight, Lightbulb, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"

export function Workshop() {
    const [showComingSoon, setShowComingSoon] = useState(false)

    const features = [
        "Identificá y superá el bloqueo del escritor",
        "Estructurá tu hipótesis en 3 pasos simples",
        "Optimizá tu tiempo de investigación"
    ]

    return (
        <section id="taller" className="py-32 relative overflow-hidden bg-background">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                    <span className="block text-sm font-bold tracking-[0.2em] text-primary uppercase">
                        CONTENIDO DE VALOR
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground font-medium leading-tight">
                        Taller <span className="text-muted-foreground italic">Estratégico</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0 relative">

                        {/* Video / Visual Placeholder Column */}
                        <div
                            onClick={() => setShowComingSoon(true)}
                            className="bg-muted/30 relative flex items-center justify-center p-12 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-border/50 overflow-hidden group cursor-pointer"
                        >
                            {/* Abstract Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30">
                                <div className="w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] animate-pulse" />
                            </div>

                            <AnimatePresence>
                                {showComingSoon ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative z-20 flex flex-col items-center justify-center text-center p-6 bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl max-w-[85%]"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setShowComingSoon(false)
                                        }}
                                    >
                                        <Clock className="w-8 h-8 text-primary mb-3" />
                                        <h4 className="font-serif text-xl font-medium text-foreground mb-2">Próximamente</h4>
                                        <p className="text-xs text-muted-foreground mb-4">Estamos finalizando la edición de esta Masterclass para brindarte el mejor nivel.</p>
                                        <Button variant="ghost" size="sm" className="h-8 text-xs font-bold uppercase tracking-wider">Cerrar</Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative z-10 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                            <PlayCircle className="w-10 h-10 text-primary translate-x-0.5" />
                                        </div>
                                        <div>
                                            <p className="text-foreground font-medium text-lg tracking-wide">Taller Gratuito</p>
                                            <p className="text-muted-foreground text-sm">Duración: 15 min</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Content Column */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-card backdrop-blur-sm relative overflow-hidden">
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50" />

                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                    <Lightbulb className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Masterclass Breve</span>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-serif text-foreground leading-tight">
                                    ¿Trabado con tu <span className="italic text-muted-foreground">Tesis</span>?
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                    Descubrí los 3 errores fatales que retrasan tu defensa y cómo resolverlos hoy mismo. Consejos rápidos para estudiantes estancados.
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                {features.map((feature, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={idx}
                                        className="flex items-center gap-3 group"
                                    >
                                        <CheckCircle className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-border/50 space-y-4">
                                <p className="text-sm text-foreground italic">
                                    ¿Buscás una solución definitiva en lugar de más consejos?
                                </p>
                                <ContactModal>
                                    <Button className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base tracking-wide rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                                        Contratar Asesoría Completa
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </ContactModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
