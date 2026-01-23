"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"

export function FinalCTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-background">


            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground font-medium leading-tight tracking-tight">
                            ¿Listo para elevar <br />
                            <span className="italic text-muted-foreground">su estándar?</span>
                        </h2>

                        <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Deje de postergar la modernización de su institución. La excelencia académica y la potencia digital están a una decisión de distancia.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        {/* Primary Button */}
                        <ContactModal>
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide text-base w-full md:w-auto transition-all hover:scale-105 shadow-lg shadow-primary/20"
                            >
                                Solicitar Diagnóstico Gratuito
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </ContactModal>

                        {/* Secondary Transparent Button */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 rounded-full border-border hover:bg-muted text-foreground font-medium text-base w-full md:w-auto"
                            asChild
                        >
                            <a href="https://wa.me/5491134206516" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 w-5 h-5" />
                                Hablemos por WhatsApp
                            </a>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
