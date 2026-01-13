"use client"

import { motion } from "framer-motion"
import { METHODOLOGY_STEPS } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Methodology() {
    return (
        <section id="metodologia" className="py-48 bg-[#050511] relative overflow-hidden">
            {/* Subtle Grid Background (Matches UseCases) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center max-w-3xl mx-auto"
                >
                    <span className="text-violet-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        NUESTRO PROCESO
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                        El camino hacia la <span className="text-white/60 italic font-serif">Excelencia</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        Un recorrido estructurado y transparente. Desde la primera idea hasta la entrega final,
                        cada paso está diseñado para garantizar resultados excepcionales.
                    </p>
                </motion.div>

                {/* Horizontal Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

                    {METHODOLOGY_STEPS.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="flex flex-col h-full justify-between space-y-6">
                                <div>
                                    {/* Icon Box (Matches ServicesTabs style) */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300 mb-6 shadow-inner">
                                        <step.icon className="w-6 h-6" />
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-bold tracking-widest text-violet-400/80 uppercase border border-violet-500/20 px-2 py-1 rounded bg-violet-500/5">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-serif text-white font-medium leading-tight mb-4 group-hover:text-white/90">
                                        {step.title}
                                    </h3>
                                    <div className="h-px w-8 bg-white/10 group-hover:w-full transition-all duration-500 mb-4" />

                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
