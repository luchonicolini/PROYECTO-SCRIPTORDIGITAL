"use client"


import { motion } from "framer-motion"
import { ArrowRight, BarChart3, BookOpenCheck, Check, ChevronDown, Clock3, Code2, FileText, ShieldCheck, ShoppingBag, Smartphone } from "lucide-react"

import { ParticlesBackground } from "@/components/particles-background"
import Link from "next/link"


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
                quantity={35}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
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
                        <motion.h1
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8 }}
                            className="font-heading text-[2.75rem] sm:text-6xl lg:text-7xl font-medium tracking-[-0.035em] text-foreground leading-[1.04] sm:leading-[1.02]"
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
                            <Link href="/asesoria-academica" className="group rounded-2xl border border-primary bg-primary p-5 text-left text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <span className="mb-3 flex items-center justify-between">
                                        <BookOpenCheck className="h-6 w-6" />
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="block font-bold">Necesito orientación académica</span>
                                    <span className="mt-1 block text-[15px] text-primary-foreground/80">Tesis, metodología y defensa oral</span>
                            </Link>

                            <Link href="/soluciones-tecnologicas" className="group rounded-2xl border border-border bg-card p-5 text-left text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                                    <span className="mb-3 flex items-center justify-between text-primary">
                                        <Code2 className="h-6 w-6" />
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="block font-bold">Necesito una solución tecnológica</span>
                                    <span className="mt-1 block text-[15px] text-muted-foreground">Web, aplicaciones y automatización</span>
                            </Link>
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

                    {/* RIGHT COLUMN - Custom digital workspace */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative mx-auto max-w-[34rem] py-10">
                            <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-2xl">
                                <div className="flex h-11 items-center gap-2 border-b border-border bg-muted/40 px-5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-primary/35" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                    <span className="ml-3 h-5 flex-1 rounded-full border border-border bg-background/60" />
                                </div>

                                <div className="grid min-h-[390px] grid-cols-[0.72fr_1.28fr]">
                                    <div className="border-r border-border bg-muted/25 p-5">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                            <ShoppingBag className="h-4 w-4" />
                                        </div>
                                        <div className="mt-8 space-y-3">
                                            <span className="block h-2 w-16 rounded-full bg-primary/55" />
                                            <span className="block h-2 w-20 rounded-full bg-border" />
                                            <span className="block h-2 w-14 rounded-full bg-border" />
                                        </div>
                                        <div className="mt-24 rounded-xl border border-border bg-background p-3">
                                            <BarChart3 className="h-4 w-4 text-primary" />
                                            <span className="mt-3 block h-1.5 w-full rounded-full bg-primary/20" />
                                            <span className="mt-2 block h-1.5 w-2/3 rounded-full bg-primary/50" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Producto digital</p>
                                        <h3 className="mt-3 max-w-[13rem] font-heading text-2xl font-semibold leading-tight text-foreground">Una experiencia pensada para vender.</h3>
                                        <div className="mt-6 aspect-[1.45] rounded-2xl bg-gradient-to-br from-primary via-primary/85 to-sky-500/70 p-5 text-primary-foreground">
                                            <div className="h-2 w-14 rounded-full bg-primary-foreground/70" />
                                            <div className="mt-3 h-2 w-24 rounded-full bg-primary-foreground/30" />
                                            <div className="mt-12 flex items-end justify-between">
                                                <span className="rounded-full bg-primary-foreground px-3 py-2 text-xs font-bold text-primary">Comprar</span>
                                                <ShoppingBag className="h-9 w-9 opacity-70" />
                                            </div>
                                        </div>
                                        <div className="mt-5 grid grid-cols-2 gap-3">
                                            <div className="h-14 rounded-xl border border-border bg-muted/30" />
                                            <div className="h-14 rounded-xl border border-border bg-muted/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-5 bottom-0 w-36 rounded-[1.8rem] border border-border bg-background p-2 shadow-2xl"
                            >
                                <div className="rounded-[1.35rem] bg-foreground p-3 text-background">
                                    <div className="mx-auto h-1 w-8 rounded-full bg-background/30" />
                                    <Smartphone className="mt-6 h-5 w-5 text-primary" />
                                    <div className="mt-5 h-20 rounded-xl bg-primary" />
                                    <div className="mt-3 h-1.5 w-16 rounded-full bg-background/40" />
                                    <div className="mt-2 h-1.5 w-10 rounded-full bg-background/20" />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-7 bottom-16 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"><FileText className="h-4 w-4" /></span>
                                <span>
                                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-primary">Proceso claro</span>
                                    <span className="mt-1 block text-xs text-muted-foreground">Del análisis a la entrega</span>
                                </span>
                            </motion.div>
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
                <a href="#servicios" className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.18em] font-medium">Ver servicios</span>
                    <ChevronDown className="w-5 h-5" />
                </a>
            </motion.div>

        </section>
    )
}
