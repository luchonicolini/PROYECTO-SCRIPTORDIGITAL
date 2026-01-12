"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ContactModal } from "@/components/contact-modal"
import { ParticlesBackground } from "@/components/particles-background"


export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050511] text-white pt-20">
            {/* COSMIC RIPPLES BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Visual Anchor - Bottom Right */}
                <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] flex items-center justify-center">

                    {/* Ripple 1 (Largest) - Soft outer edge */}
                    <div className="absolute w-[1800px] h-[1800px] rounded-full border border-violet-500/5 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] opacity-50" />

                    {/* Ripple 2 - Distinct Band */}
                    <div className="absolute w-[1400px] h-[1400px] rounded-full border border-violet-500/10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_60%)] opacity-60" />

                    {/* Ripple 3 - Brighter Band */}
                    <div className="absolute w-[1000px] h-[1000px] rounded-full border border-violet-400/20 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.08)_0%,transparent_50%)] shadow-[0_0_100px_rgba(139,92,246,0.1)]" />

                    {/* Ripple 4 - Inner Core */}
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-violet-300/30 bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.15)_0%,transparent_50%)] shadow-[0_0_80px_rgba(167,139,250,0.2)]" />

                    {/* Center Glow - The Light Source */}
                    <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-100/10 blur-3xl" />
                </div>
            </div>

            {/* STAR FIELD (Subtle dust) */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

            <ParticlesBackground
                quantity={60}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
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
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block"
                        >
                            <span className="text-violet-300 text-sm font-medium tracking-[0.2em] uppercase border border-violet-500/30 bg-violet-500/10 px-3 py-1 rounded-sm">
                                Consultoría Estratégica
                            </span>
                        </motion.div>

                        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white">
                            Donde el <br />
                            <span className="text-white">Conocimiento</span> <br />
                            <span className="text-white/80">se encuentra con la Tecnología</span>
                        </h1>

                        <p className="text-xl text-white/50 leading-relaxed font-light max-w-lg">
                            La primera consultora que une el mundo de las Leyes y las Letras con la inmediatez del Código. Desde la redacción de su tesis hasta el despliegue de su propia plataforma.
                        </p>
                    </motion.div>

                    {/* RIGHT COLUMN - Floating Button Action */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden md:flex items-end justify-center min-h-[500px]"
                    >
                        {/* The bright pill button floating in the void/ripples */}
                        <div className="absolute bottom-32 right-20">
                            <ContactModal>
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold tracking-wide text-lg shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all duration-500 scale-100 hover:scale-105"
                                >
                                    SOLICITAR PRESUPUESTO
                                </Button>
                            </ContactModal>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050511] to-transparent z-20 pointer-events-none" />
        </section>
    )
}
