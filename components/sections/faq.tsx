"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

import { FAQ_ITEMS } from "@/lib/data"

export function FAQ() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <section id="faq" className="py-36 relative overflow-hidden bg-background">
            {/* Subtle Background (Matches Team/UseCases) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* LEFT: Header (Col 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:sticky lg:top-32"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                            Soporte & Dudas
                        </span>
                        <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
                            Preguntas <br />
                            <span className="text-muted-foreground italic">Frecuentes</span>
                        </h2>
                        <div className="h-px w-12 bg-border mb-6" />
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            Claridad ante todo. Resolvemos las inquietudes más comunes sobre propiedad intelectual, tiempos y garantías.
                        </p>
                    </motion.div>

                    {/* RIGHT: Accordion (Col 7) */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
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
                                            "w-full text-left p-6 md:p-8 rounded-3xl transition-all duration-500 border group",
                                            isOpen
                                                ? "bg-card backdrop-blur-md border-border shadow-2xl"
                                                : "bg-muted/50 border-border/50 hover:border-border"
                                        )}
                                    >
                                        <div className="flex justify-between items-center gap-6">
                                            <h3 className={cn(
                                                "text-lg md:text-xl font-serif font-medium transition-colors duration-300",
                                                isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                            )}>
                                                {faq.question}
                                            </h3>
                                            <span className={cn(
                                                "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500",
                                                isOpen
                                                    ? "bg-foreground text-background border-foreground rotate-180"
                                                    : "border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground"
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
                                                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-muted-foreground mt-6 text-base md:text-lg leading-relaxed font-light pr-12 border-t border-border pt-6">
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
