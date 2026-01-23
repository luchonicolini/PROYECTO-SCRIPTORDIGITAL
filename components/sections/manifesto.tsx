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
                        <h2 className="font-heading text-5xl md:text-6xl font-medium leading-tight text-foreground">
                            El Manifiesto <span className="text-primary italic font-serif">Scriptor</span>
                        </h2>

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

                    {/* Right Column: Image + Code Window Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-3xl overflow-hidden group"
                    >
                        {/* Library Background Image */}
                        <Image
                            src="/images/manifesto-bg.png"
                            alt="Library background"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Floating Glass Code Slab - Keeping Dark for Contrast but adapting border */}
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="w-full max-w-md bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform hover:-translate-y-2 duration-500">
                                {/* Header / Status Bar */}
                                <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-xs font-medium tracking-widest text-primary/80 uppercase">System.Core</span>
                                    </div>
                                    <div className="text-[10px] text-white/30 font-mono">v2.0.4</div>
                                </div>

                                {/* Code Content */}
                                <div className="p-8 font-mono text-sm leading-loose">
                                    <div className="text-gray-500 mb-4">{"// Definición de Valor"}</div>

                                    <div className="text-secondary">interface <span className="text-white font-bold">DigitalExcellence</span> <span className="text-white/40">{`{`}</span></div>

                                    <div className="pl-6 border-l border-white/5 my-2 space-y-2">
                                        <div>
                                            <span className="text-indigo-400">input</span>: <span className="text-primary">&quot;Academic_Rigor&quot;</span>;
                                        </div>
                                        <div>
                                            <span className="text-indigo-400">process</span>: <span className="text-primary">&quot;Premium_Dev&quot;</span>;
                                        </div>
                                        <div>
                                            <span className="text-indigo-400">output</span>: <span className="text-primary">&quot;Market_Leader&quot;</span>;
                                        </div>
                                    </div>

                                    <div className="text-white/40">{`}`}</div>

                                    <div className="mt-8 flex items-center gap-3 text-xs text-primary bg-primary/10 p-3 rounded-lg border border-primary/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>Compilation Successful</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
