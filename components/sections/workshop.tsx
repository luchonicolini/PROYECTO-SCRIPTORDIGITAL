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
                <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                    <span className="block text-sm font-bold tracking-[0.2em] text-primary uppercase">
                        CONTENIDO DE VALOR
                    </span>
                    <h2 className="font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
                        Taller <span className="text-muted-foreground italic">Estratégico</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0 relative">

                        {/* Video / Visual Placeholder Column */}
                        <div className="bg-muted/30 relative flex items-center justify-center p-12 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-border/50 overflow-hidden group">
                            <span className="absolute left-4 top-4 z-20 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400">
                                Próximamente
                            </span>
                            <AnimatePresence>
                                {showComingSoon ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative z-20 flex flex-col items-center justify-center text-center p-6 bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl max-w-[85%]"
                                    >
                                        <Clock className="w-8 h-8 text-primary mb-3" />
                                        <h4 className="mb-2 font-heading text-xl font-medium text-foreground">Próximamente</h4>
                                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">Estamos finalizando la edición de esta Masterclass para brindarte el mejor nivel.</p>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setShowComingSoon(false)}
                                            className="h-8 text-xs font-bold uppercase tracking-wider"
                                        >
                                            Cerrar
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowComingSoon(true)}
                                        aria-label="Ver información del taller gratuito, disponible próximamente"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative z-10 flex flex-col items-center space-y-4 rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                            <PlayCircle className="w-10 h-10 text-primary translate-x-0.5" />
                                        </div>
                                        <div>
                                            <p className="text-foreground font-medium text-lg tracking-wide">Taller Gratuito</p>
                                            <p className="text-muted-foreground text-sm">Duración: 15 min</p>
                                        </div>
                                    </motion.button>
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
                                <h3 className="font-heading text-3xl leading-tight text-foreground lg:text-4xl">
                                    ¿Trabado con tu <span className="italic text-muted-foreground">Tesis</span>?
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                    Conocé tres obstáculos frecuentes que retrasan una defensa y aprendé cómo organizar los próximos pasos para retomar el trabajo.
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
                                    ¿Buscás acompañamiento para avanzar con un plan propio?
                                </p>
                                <ContactModal defaultService="tesis">
                                    <Button className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base tracking-wide rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                                        Solicitar Diagnóstico Gratuito
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
