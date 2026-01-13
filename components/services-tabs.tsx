"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Check, ArrowRight, X } from "lucide-react"
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
        benefits?: string[]
        deliverables?: string[]
    }
}

export function ServicesTabs() {
    const [activeTab, setActiveTab] = useState<TabType>("ACADEMIA")
    const [selectedCard, setSelectedCard] = useState<ServiceItem | null>(null)

    const isAcademia = activeTab === "ACADEMIA"
    const currentData = isAcademia ? SERVICES_DATA.ACADEMIA : SERVICES_DATA.TECNOLOGIA

    // Theme colors
    const themeClass = isAcademia ? "text-violet-400" : "text-cyan-400"
    const hoverBorderClass = isAcademia ? "hover:border-violet-500/50" : "hover:border-cyan-500/50"

    // Close on Escape key
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedCard(null)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    // Lock body scroll and HTML (Lenis)
    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = "hidden"
            document.documentElement.classList.add("overflow-hidden")
        } else {
            document.body.style.overflow = "auto"
            document.documentElement.classList.remove("overflow-hidden")
        }
        return () => {
            document.body.style.overflow = "auto"
            document.documentElement.classList.remove("overflow-hidden")
        }
    }, [selectedCard])

    return (
        <section id="servicios" className="py-36 px-4 w-full relative overflow-hidden bg-[#050511]">
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
                <div className="w-full min-h-[480px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                        >
                            {currentData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    onClick={() => setSelectedCard(item)}
                                    className={cn(
                                        "group relative flex flex-col p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer overflow-hidden transition-all duration-300",
                                        hoverBorderClass,
                                        "hover:shadow-2xl hover:-translate-y-2 min-h-[480px]"
                                    )}
                                >
                                    {/* Icon Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300",
                                            "bg-white/5 border-white/10 shadow-inner",
                                            isAcademia ? "group-hover:bg-violet-500/20 group-hover:border-violet-500/40" : "group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40"
                                        )}>
                                            <item.icon className={cn(
                                                "w-8 h-8 transition-colors duration-300",
                                                isAcademia ? "text-violet-200" : "text-cyan-200"
                                            )} />
                                        </div>

                                        <div className={cn(
                                            "p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0",
                                            isAcademia ? "bg-violet-500 text-white" : "bg-cyan-500 text-black"
                                        )}>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-6 flex-1">
                                        <h3 className="text-3xl font-serif text-white font-medium group-hover:text-white/90 leading-tight">
                                            {item.title}
                                        </h3>

                                        <div className="h-px w-12 bg-white/10 group-hover:w-full transition-all duration-500" />

                                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                                            {item.desc}
                                        </p>

                                        {/* Key Features Preview */}
                                        <div className="pt-4 space-y-3">
                                            {item.modal.features.slice(0, 3).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <Check className={cn(
                                                        "w-5 h-5 shrink-0 mt-0.5",
                                                        isAcademia ? "text-violet-400" : "text-cyan-400"
                                                    )} />
                                                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <span className={cn(
                                            "text-sm font-bold uppercase tracking-widest transition-colors",
                                            themeClass
                                        )}>
                                            Ver Detalles Completos
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* EXPANDED OVERLAY */}
            <AnimatePresence>
                {selectedCard && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                        />

                        {/* Expanded Card */}
                        <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 md:p-8 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                className="w-full max-w-5xl max-h-[90vh] bg-[#0a0f1c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto flex flex-col"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedCard(null)
                                    }}
                                    className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Content Scroll Area */}
                                <div className="overflow-y-auto flex-1 custom-scrollbar" data-lenis-prevent>
                                    <div className="p-8 md:p-12 space-y-10">
                                        {/* Header Section */}
                                        <div className="flex flex-col md:flex-row gap-8 md:items-start border-b border-white/5 pb-8 relative">
                                            {/* Decoration line */}
                                            <div className={cn(
                                                "absolute top-0 left-0 w-20 h-1",
                                                activeTab === "ACADEMIA" ? "bg-violet-500" : "bg-cyan-500"
                                            )} />

                                            <div className={cn(
                                                "w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 border bg-white/5 mt-4 md:mt-0",
                                                activeTab === "ACADEMIA" ? "border-violet-500/20 text-violet-400" : "border-cyan-500/20 text-cyan-400"
                                            )}>
                                                <selectedCard.icon className="w-12 h-12" />
                                            </div>
                                            <div className="space-y-2 mt-2">
                                                <h3 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight">
                                                    {selectedCard.title}
                                                </h3>
                                                <p className={cn("text-sm font-bold tracking-widest uppercase py-2", activeTab === "ACADEMIA" ? "text-violet-400" : "text-cyan-400")}>
                                                    {activeTab === "ACADEMIA" ? "SOLUCIONES ACADÉMICAS" : "SOLUCIONES TECNOLÓGICAS"}
                                                </p>
                                                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                                                    {selectedCard.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Main Content Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            {/* Column 1: Context & Solution */}
                                            <div className="space-y-8">
                                                <div className="space-y-3">
                                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                        El Desafío
                                                    </h4>
                                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                                                        <p className="text-gray-300 italic font-medium relative z-10 text-lg">
                                                            &quot;{selectedCard.modal.problem}&quot;
                                                        </p>
                                                        <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                                        <div className={cn("w-1.5 h-1.5 rounded-full", activeTab === "ACADEMIA" ? "bg-violet-500" : "bg-cyan-500")} />
                                                        Nuestra Solución
                                                    </h4>
                                                    <p className="text-gray-200 text-lg leading-relaxed">
                                                        {selectedCard.modal.solution}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Column 2: Value & Deliverables */}
                                            <div className="space-y-10">
                                                {selectedCard.modal.benefits && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-white/10 pb-2">
                                                            Beneficios Clave
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {selectedCard.modal.benefits.map((benefit, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <div className={cn(
                                                                        "mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/5",
                                                                        activeTab === "ACADEMIA" ? "text-violet-400" : "text-cyan-400"
                                                                    )}>
                                                                        <Check className="w-3 h-3" />
                                                                    </div>
                                                                    <span className="text-gray-300">{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-white/10 pb-2">
                                                        Lo Que Entregamos
                                                    </h4>
                                                    <ul className="grid gap-3">
                                                        {(selectedCard.modal.deliverables || selectedCard.modal.features).map((item, i) => (
                                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                                                                <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", activeTab === "ACADEMIA" ? "bg-violet-500" : "bg-cyan-500")} />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer Action */}
                                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                                            <p className="text-gray-500 text-sm hidden md:block">
                                                * Garantía de conformidad y soporte post-entrega incluido.
                                            </p>
                                            <Button
                                                asChild
                                                className={cn(
                                                    "w-full md:w-auto h-14 px-8 text-lg font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                                                    activeTab === "ACADEMIA"
                                                        ? "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-900/20"
                                                        : "bg-cyan-500 hover:bg-cyan-600 text-black shadow-cyan-900/20"
                                                )}
                                            >
                                                <a href="#contact" className="flex items-center gap-2">
                                                    Solicitar Presupuesto
                                                    <ArrowRight className="w-5 h-5" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section >
    )
}
