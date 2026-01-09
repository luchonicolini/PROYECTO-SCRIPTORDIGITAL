"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

import { FAQ_ITEMS } from "@/lib/data"

export function FAQ() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <section className="py-24 relative overflow-hidden bg-[#050511]">
            {/* Background Ambience */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* LEFT: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="text-sm font-medium tracking-[0.2em] text-cyan-400 uppercase mb-4 block">
                            Soporte & Dudas
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading text-white font-medium mb-6 leading-tight">
                            Preguntas <br />
                            <span className="text-white/40 italic">Frecuentes</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                            Resolvemos las inquietudes más comunes sobre nuestra forma de trabajar, la propiedad intelectual y el mantenimiento.
                        </p>
                    </motion.div>

                    {/* RIGHT: Accordion */}
                    <div className="space-y-4">
                        {FAQ_ITEMS.map((faq, index) => {
                            const isOpen = openItem === faq.id
                            return (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => setOpenItem(isOpen ? null : faq.id)}
                                        className={cn(
                                            "w-full text-left p-6 rounded-2xl transition-all duration-300 border group",
                                            isOpen
                                                ? "bg-white/10 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                                                : "bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10"
                                        )}
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className={cn(
                                                "text-lg font-medium pr-8 transition-colors duration-300",
                                                isOpen ? "text-cyan-400" : "text-white group-hover:text-white/90"
                                            )}>
                                                {faq.question}
                                            </h3>
                                            <span className={cn(
                                                "flex-shrink-0 p-1 rounded-full border transition-all duration-300",
                                                isOpen
                                                    ? "bg-cyan-500 border-cyan-500 text-black rotate-0"
                                                    : "border-white/10 text-gray-400 group-hover:border-white/30 group-hover:text-white"
                                            )}>
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-400 mt-4 leading-relaxed pr-8">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
