"use client"

import { motion } from "framer-motion"
import { Search, Map, Code2, Rocket } from "lucide-react"

import { METHODOLOGY_STEPS } from "@/lib/data"

export function Methodology() {
    return (
        <section id="metodologia" className="py-32 bg-[#050511] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-medium text-white mb-6">
                        El camino hacia la <span className="text-cyan-400 italic font-serif">Excelencia</span>
                    </h2>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative">

                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-white/10 z-0"></div>

                    <div className="grid md:grid-cols-4 gap-6 relative z-10">
                        {METHODOLOGY_STEPS.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col group h-full"
                            >
                                {/* Step Icon */}
                                <div className="flex justify-center mb-12">
                                    <div className="w-22 h-22 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center relative group-hover:border-cyan-400/50 transition-colors duration-500 z-10">
                                        <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                        <step.icon className="w-8 h-8 text-white/40 group-hover:text-cyan-400 transition-colors duration-300" />
                                    </div>
                                </div>

                                {/* Step Card */}
                                <div className="bg-[#0a0f1c]/50 p-8 rounded-2xl border border-white/5 space-y-4 hover:bg-[#0a0f1c] transition-colors duration-300 flex-1 flex flex-col items-center text-center">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-mono font-bold text-white/30 tracking-widest uppercase">
                                            {step.number}. {step.label}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-serif text-white leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
