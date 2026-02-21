"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Manifesto() {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="block text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
                                NUESTRA FILOSOFÍA
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-foreground font-medium leading-tight">
                                El Manifiesto <span className="text-muted-foreground italic">Scriptor</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                            <p>
                                En <strong className="text-foreground font-medium">ScriptorDigital</strong>, creemos que la profundidad humanística y la potencia tecnológica no son opuestos, sino complementarios.
                            </p>

                            <p>
                                Vivimos en una era donde el rigor académico necesita velocidad de ejecución, y donde las mejores ideas digitales requieren fundamentos sólidos.
                            </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6 py-1 my-8">
                            <p className="text-xl text-foreground italic leading-relaxed font-serif">
                                &quot;Acompañamos a profesionales desde la estructura de su tesis doctoral hasta el despliegue de su propia App en la nube.&quot;
                            </p>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            Nuestro lema, <span className="text-primary italic">Ad excellentiam laborans</span>, no es solo una frase; es el estándar de cada línea de código y cada párrafo que editamos.
                        </p>
                    </motion.div>

                    {/* Right Column: System Core Visual */}
                    {/* Right Column: Living Knowledge Architecture Visual */}
                    <motion.div

                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border group"
                    >
                        <Image
                            src="/images/living-knowledge.png"
                            alt="The Living Knowledge Architecture - Fusion of Library and Digital Nexus"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        {/* Optional Label Overlay */}
                        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-foreground font-medium">Nexus.Academia // v3.0</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
