"use client"


import { motion } from "framer-motion"
import { Sparkles, ArrowRight, FileText, ChevronDown } from "lucide-react"

import { ParticlesBackground } from "@/components/particles-background"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"


export function HeroSection() {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20 pb-32 md:pt-28">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Visual Anchor - Bottom Right */}
                <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] flex items-center justify-center">

                    {/* Ripple 1 (Largest) - Cyan/Blue */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center z-0"
                    >
                        <div className="absolute w-[1800px] h-[1800px] rounded-full border border-cyan-500/10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] opacity-50" />
                    </motion.div>

                    {/* Ripple 2 - Blue/Indigo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center z-0"
                    >
                        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-secondary/20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_60%)] opacity-60" />
                    </motion.div>

                    {/* Ripple 3 - Cyan Highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center z-0"
                    >
                        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_50%)] shadow-[0_0_100px_rgba(6,182,212,0.15)]" />
                    </motion.div>
                    {/* Center Glow - The Light Source */}
                    <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/20 blur-3xl" />
                </div>
            </div>

            {/* STAR FIELD (Subtle dust) */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

            <ParticlesBackground
                quantity={100}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT COLUMN - Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 max-w-2xl"
                    >
                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8 }}
                            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.1] mb-6"
                        >    Donde el <br />
                            <span className="text-primary font-bold">Conocimiento</span> <br />
                            <span className="text-foreground/80">se encuentra con la Tecnología</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-lg mb-8"
                        >
                            La primera consultora que une el mundo de las Leyes y las Letras con la inmediatez del Código. Desde la redacción de su tesis hasta el despliegue de su propia plataforma.
                        </motion.p>

                        {/* CTA BUTTONS (NEW) */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <ContactModal>
                                <Button
                                    size="lg"
                                    className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide text-base w-full sm:w-auto transition-all hover:scale-105 shadow-lg shadow-primary/20"
                                >
                                    Solicitar Diagnóstico
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </ContactModal>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5 text-foreground font-medium text-base w-full sm:w-auto group"
                            >
                                <a href="#manifiesto">
                                    <FileText className="mr-2 w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                                    Nuestro Manifiesto
                                </a>
                            </Button>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT COLUMN - Visual Anchor (Abstract Glass Geometry) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden md:flex items-center justify-center h-full min-h-[500px]"
                    >
                        {/* Abstract Representation of "Law + Code" */}
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Rotating Ring */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed animate-[spin_10s_linear_infinite]" />
                            {/* Check or Logo placeholder */}
                            <div className="absolute inset-20 rounded-full bg-secondary/5 backdrop-blur-3xl border border-secondary/10 flex items-center justify-center">
                                <Sparkles className="w-24 h-24 text-cyan-400/40" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* SCROLL INDICATOR (NEW) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            >
                <a href="#manifiesto" className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Descubre Más</span>
                    <ChevronDown className="w-5 h-5" />
                </a>
            </motion.div>

        </section>
    )
}
