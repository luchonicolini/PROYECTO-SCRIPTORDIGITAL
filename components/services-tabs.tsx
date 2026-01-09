"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Check, ArrowRight, GraduationCap, Laptop, Shield, BookOpen, Globe, Gavel } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { SERVICES_DATA } from "@/lib/data"

type TabType = "ACADEMIA" | "TECNOLOGIA"


interface ServiceItem {
    id: string
    title: string
    desc: string
    icon: React.ElementType
    modal: {
        problem: string
        solution: string
        features: string[]
    }
}

export function ServicesTabs() {
    const [activeTab, setActiveTab] = useState<TabType>("ACADEMIA")
    const [selectedCard, setSelectedCard] = useState<ServiceItem | null>(null)

    const isAcademia = activeTab === "ACADEMIA"

    // Theme colors
    const themeClass = isAcademia ? "text-violet-400" : "text-cyan-400"
    const hoverBorderClass = isAcademia ? "hover:border-violet-500/50" : "hover:border-cyan-500/50"

    const currentData = isAcademia ? SERVICES_DATA.ACADEMIA : SERVICES_DATA.TECNOLOGIA

    return (
        <section id="servicios" className="py-24 px-4 w-full relative overflow-hidden bg-[#050511]">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* HEADER */}
                <div className="text-center mb-12 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase"
                    >
                        Nuestra Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading text-white font-medium"
                    >
                        Soluciones <span className="italic text-white/80">Especializadas</span>
                    </motion.h2>
                </div>

                {/* SWITCHER (TABS) */}
                <div className="relative flex p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-16">
                    <LayoutGroup>
                        {(["ACADEMIA", "TECNOLOGIA"] as TabType[]).map((tab) => {
                            const isActive = activeTab === tab
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "relative px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 z-10",
                                        isActive
                                            ? (tab === "ACADEMIA" ? "text-violet-400" : "text-cyan-400")
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={cn(
                                                "absolute inset-0 rounded-full border bg-opacity-20 backdrop-blur-md",
                                                tab === "ACADEMIA"
                                                    ? "border-violet-500 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                                                    : "border-cyan-500 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                            )}
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {tab}
                                </button>
                            )
                        })}
                    </LayoutGroup>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <AnimatePresence mode="wait">
                        {currentData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onClick={() => setSelectedCard(item)}
                                className={cn(
                                    "group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer overflow-hidden transition-all duration-300",
                                    hoverBorderClass,
                                    "hover:shadow-2xl hover:-translate-y-1"
                                )}
                            >
                                {/* Glow Effect on Hover */}
                                <div
                                    className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                        "bg-gradient-to-br from-transparent via-transparent",
                                        isAcademia ? "to-violet-500/10" : "to-cyan-500/10"
                                    )}
                                />

                                <div className="relative z-10 space-y-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border",
                                        "bg-white/5 border-white/10",
                                        isAcademia ? "group-hover:text-violet-400 group-hover:border-violet-500/30" : "group-hover:text-cyan-400 group-hover:border-cyan-500/30"
                                    )}>
                                        <item.icon className="w-6 h-6 transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-xl font-serif text-white font-medium group-hover:text-white/90">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className={cn(
                                        "flex items-center text-xs font-bold uppercase tracking-wider mt-4",
                                        themeClass
                                    )}>
                                        Ver Detalles
                                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* MODAL (DIALOG) */}
            <Dialog open={!!selectedCard} onOpenChange={(open) => !open && setSelectedCard(null)}>
                <DialogContent className="bg-[#0a0a0a]/95 border-white/10 text-white backdrop-blur-xl sm:max-w-[600px] p-0 overflow-hidden shadow-2xl">
                    {selectedCard && (
                        <>
                            {/* Modal Header Decoration */}
                            <div
                                className={cn(
                                    "h-1 w-full",
                                    isAcademia ? "bg-violet-500" : "bg-cyan-500"
                                )}
                            />

                            <div className="p-8 space-y-8">
                                {/* Header */}
                                <div className="flex items-start gap-4">
                                    <div className={cn(
                                        "p-3 rounded-xl border bg-white/5",
                                        isAcademia ? "border-violet-500/20 text-violet-400" : "border-cyan-500/20 text-cyan-400"
                                    )}>
                                        <selectedCard.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-serif font-medium text-white text-left">
                                                {selectedCard.title}
                                            </DialogTitle>
                                        </DialogHeader>
                                        <p className={cn("text-sm font-medium mt-1", themeClass)}>
                                            {isAcademia ? "SOLUCIONES ACADÉMICAS" : "SOLUCIONES TECNOLÓGICAS"}
                                        </p>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="space-y-6">
                                    {/* Problem */}
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                                        <p className="text-gray-400 italic font-medium">
                                            &quot;{selectedCard.modal.problem}&quot;
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <p className="text-gray-200 text-lg leading-relaxed">
                                        {selectedCard.modal.solution}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedCard.modal.features.map((feature: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                                    <Check className={cn("w-4 h-4", themeClass)} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="pt-4">
                                    <Button
                                        asChild
                                        className={cn(
                                            "w-full h-12 text-base font-medium rounded-xl transition-all duration-300",
                                            isAcademia
                                                ? "bg-violet-600 hover:bg-violet-700 text-white"
                                                : "bg-cyan-500 hover:bg-cyan-600 text-black"
                                        )}
                                    >
                                        <a href="#contact">
                                            Solicitar Presupuesto
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section >
    )
}
