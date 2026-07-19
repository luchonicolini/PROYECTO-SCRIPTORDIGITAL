"use client"


import { motion } from "framer-motion"
import { ArrowRight, BookOpenCheck, ChevronDown, Code2, ShieldCheck, Clock3, Check } from "lucide-react"

import { ParticlesBackground } from "@/components/particles-background"
import { ContactModal } from "@/components/contact-modal"


export function HeroSection() {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-28 pb-24 md:pt-32">


            {/* Background Effects Originales */}
            <div className="absolute inset-0 z-0 pointer-events-none">
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
                <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-20 items-center">

                    {/* LEFT COLUMN - Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 max-w-3xl"
                    >
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
                        >
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Consultoría para profesionales e instituciones
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8 }}
                            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.035em] text-foreground leading-[1.02]"
                        >
                            Convertimos proyectos complejos en
                            <span className="text-primary italic"> avances concretos.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl"
                        >
                            Acompañamos investigaciones académicas y desarrollamos soluciones digitales para profesionales e instituciones que necesitan claridad, método y tecnología confiable.
                        </motion.p>

                        {/* CTA BUTTONS (NEW) */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid sm:grid-cols-2 gap-4 pt-2 max-w-2xl"
                        >
                            <ContactModal defaultService="tesis">
                                <button className="group rounded-2xl border border-primary bg-primary p-5 text-left text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <span className="mb-3 flex items-center justify-between">
                                        <BookOpenCheck className="h-6 w-6" />
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="block font-bold">Necesito orientación académica</span>
                                    <span className="mt-1 block text-sm text-primary-foreground/75">Tesis, metodología y defensa oral</span>
                                </button>
                            </ContactModal>

                            <ContactModal defaultService="web">
                                <button className="group rounded-2xl border border-border bg-card p-5 text-left text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                                    <span className="mb-3 flex items-center justify-between text-primary">
                                        <Code2 className="h-6 w-6" />
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="block font-bold">Necesito una solución tecnológica</span>
                                    <span className="mt-1 block text-sm text-muted-foreground">Web, aplicaciones y automatización</span>
                                </button>
                            </ContactModal>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.55 }}
                            className="flex flex-wrap gap-x-6 gap-y-3 pt-1 text-sm text-muted-foreground"
                        >
                            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Primera consulta sin cargo</span>
                            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> Respuesta en 24 horas</span>
                            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Trabajo confidencial</span>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - Concrete service preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative mx-auto max-w-lg rounded-[2rem] border border-border bg-card/80 p-3 shadow-2xl backdrop-blur-xl">
                            <div className="rounded-[1.5rem] border border-border/70 bg-background p-7">
                                <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Diagnóstico inicial</p>
                                        <p className="mt-1 text-sm text-muted-foreground">Elegí el área de tu proyecto</p>
                                    </div>
                                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">Disponible</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-xl bg-primary p-3 text-primary-foreground"><BookOpenCheck className="h-5 w-5" /></div>
                                            <div>
                                                <h3 className="font-heading text-xl font-semibold text-foreground">Área académica</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Definimos el problema, ordenamos el proceso y construimos una hoja de ruta metodológica.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-border bg-muted/20 p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-xl bg-foreground p-3 text-background"><Code2 className="h-5 w-5" /></div>
                                            <div>
                                                <h3 className="font-heading text-xl font-semibold text-foreground">Área tecnológica</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Analizamos procesos y diseñamos una solución digital clara, escalable y fácil de usar.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-xl bg-muted/50 px-4 py-3 text-center text-xs text-muted-foreground">
                                    Sin compromiso · Alcance y próximos pasos claros
                                </div>
                            </div>
                            <div className="absolute -right-8 -top-8 -z-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 -z-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
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
