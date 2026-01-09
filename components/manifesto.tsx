"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Manifesto() {
    return (
        <section className="relative py-24 bg-[#050511] overflow-hidden">
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
                        <h2 className="font-heading text-5xl md:text-6xl font-medium leading-tight text-white">
                            El Manifiesto <span className="text-violet-400 italic font-serif">Scriptor</span>
                        </h2>

                        <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                            <p>
                                En <strong className="text-white font-medium">ScriptorDigital</strong>, creemos que la profundidad humanística y la potencia tecnológica no son opuestos, sino complementarios.
                            </p>

                            <p>
                                Vivimos en una era donde el rigor académico necesita velocidad de ejecución, y donde las mejores ideas digitales requieren fundamentos sólidos.
                            </p>
                        </div>

                        <div className="border-l-4 border-violet-500 pl-6 py-1 my-8">
                            <p className="text-xl text-white italic leading-relaxed font-serif">
                                &quot;Acompañamos a profesionales desde la estructura de su tesis doctoral hasta el despliegue de su propia App en la nube.&quot;
                            </p>
                        </div>

                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            Nuestro lema, <span className="text-violet-400 italic">Ad excellentiam laborans</span>, no es solo una frase; es el estándar de cada línea de código y cada párrafo que editamos.
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
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Floating Code Window */}
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="w-full max-w-md bg-[#1e1e1e]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/10 transform transition-transform hover:-translate-y-2 duration-500">
                                {/* Window Header */}
                                <div className="bg-[#252526] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="ml-4 text-xs text-white/40 font-mono">scriptor_core.ts</div>
                                </div>

                                {/* Code Content */}
                                <div className="p-6 font-mono text-sm leading-relaxed">
                                    <div className="text-pink-400">interface <span className="text-amber-200">DigitalProduct</span> <span className="text-white">{`{`}</span></div>
                                    <div className="pl-4">
                                        <span className="text-violet-300">input</span>: <span className="text-emerald-300">&quot;Academic_Research&quot;</span>;
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-violet-300">transform</span>: <span className="text-emerald-300">&quot;Modern_Tech_Stack&quot;</span>;
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-violet-300">output</span>: <span className="text-emerald-300">&quot;Scalable_Solution&quot;</span>;
                                    </div>
                                    <div className="text-white">{`}`}</div>

                                    <div className="mt-8 flex items-center gap-2 text-xs text-white/50 border-t border-white/10 pt-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span>Compiling Excellence...</span>
                                        <span className="ml-auto">100%</span>
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
