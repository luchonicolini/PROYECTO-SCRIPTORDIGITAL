"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Check, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ContactModal } from "@/components/contact-modal"
// import { DialogHeader } from "@/components/ui/dialog" // Unused

import { SERVICES_DATA } from "@/lib/data"
import { staggerContainer, fadeInUp, scaleIn, smoothTransition } from "@/lib/animations"

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
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [contactModalService, setContactModalService] = useState<string>("")

    const isAcademiaActiveTab = activeTab === "ACADEMIA"
    const currentData = isAcademiaActiveTab ? SERVICES_DATA.ACADEMIA : SERVICES_DATA.TECNOLOGIA

    // Theme colors for main display (Unified Gold Theme)
    const themeClass = "text-primary"
    const hoverBorderClass = "hover:border-primary/50"

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
        <section id="servicios" className="py-24 md:py-32 px-4 w-full relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* HEADER */}
                <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                        className="block text-sm font-bold tracking-[0.2em] text-primary uppercase"
                    >
                        Cómo podemos ayudarte
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...smoothTransition, delay: 0.1 }}
                    className="font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl"
                    >
                        Dos áreas de trabajo, <span className="italic text-muted-foreground">un mismo método</span>
                    </motion.h2>
                </div>



                {/* SWITCHER (TABS) */}
                <div className="relative flex p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-border mb-12" role="tablist" aria-label="Áreas de servicio">
                    <LayoutGroup>
                        {(["ACADEMIA", "TECNOLOGIA"] as TabType[]).map((tab) => {
                            const isActive = activeTab === tab
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.toLowerCase()}`}
                                    className={cn(
                                        "relative px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 z-10",
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={cn(
                                                "absolute inset-0 rounded-full border shadow-sm border-primary bg-primary/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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
                            variants={staggerContainer}
                            id={`panel-${activeTab.toLowerCase()}`}
                            role="tabpanel"
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                        >
                            {currentData.map((item) => (
                                <motion.button
                                    type="button"
                                    key={item.id}
                                    variants={fadeInUp}
                                    onClick={() => setSelectedCard(item)}
                                    aria-label={`Ver detalles de ${item.title}`}
                                    className={cn(
                                        "group relative flex flex-col p-7 md:p-8 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300 text-left",
                                        "glass-panel hover:shadow-xl hover:-translate-y-1 min-h-[390px] focus-visible:ring-2 focus-visible:ring-primary",
                                        hoverBorderClass
                                    )}
                                >
                                    {/* Icon Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300",
                                            "bg-muted border-border shadow-inner group-hover:bg-primary/10 group-hover:border-primary/30"
                                        )}>
                                            <item.icon className="w-8 h-8 transition-colors duration-300 text-primary" />
                                        </div>

                                        <div className="p-2 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-6 flex-1">
                                        <h3 className="font-heading text-2xl font-medium leading-tight text-foreground group-hover:text-foreground/90 md:text-3xl">
                                            {item.title}
                                        </h3>

                                        <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />

                                        <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                            {item.desc}
                                        </p>

                                        {/* Key Features Preview */}
                                        <div className="pt-2 space-y-2.5">
                                            {item.modal.features.slice(0, 3).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span className="text-base leading-relaxed text-muted-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-8 pt-6 border-t border-border">
                                        <span className={cn(
                                            "flex items-center justify-between text-sm font-bold transition-colors",
                                            themeClass
                                        )}>
                                            Ver detalles
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    </AnimatePresence>

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
                                        variants={scaleIn}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="w-full max-w-5xl max-h-[90vh] bg-background/95 backdrop-blur-xl border border-border rounded-3xl overflow-hidden relative pointer-events-auto flex flex-col shadow-2xl"
                                        role="dialog"
                                        aria-modal="true"
                                        aria-labelledby="service-dialog-title"
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedCard(null)
                                            }}
                                            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-foreground"
                                            aria-label="Cerrar detalles del servicio"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        {/* Content Scroll Area */}
                                        <div className="overflow-y-auto flex-1 custom-scrollbar" data-lenis-prevent>
                                            <div className="p-8 md:p-12 space-y-10">
                                                {/* Header Section */}
                                                <div className="flex flex-col md:flex-row gap-8 md:items-start border-b border-border/50 pb-8 relative">
                                                    {/* Decoration line */}
                                                    <div className="absolute top-0 left-0 w-20 h-1 bg-primary" />

                                                    <div className="w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 border bg-muted/40 mt-4 md:mt-0 border-primary/20 text-primary">
                                                        <selectedCard.icon className="w-12 h-12" />
                                                    </div>
                                                    <div className="space-y-2 mt-2">
                                            <h3 id="service-dialog-title" className="font-heading text-3xl font-medium leading-tight text-foreground md:text-5xl">
                                                            {selectedCard?.title}
                                                        </h3>
                                                        <p className="text-sm font-bold tracking-widest uppercase py-2 text-primary">
                                                            {activeTab === "ACADEMIA" ? "SOLUCIONES ACADÉMICAS" : "SOLUCIONES TECNOLÓGICAS"}
                                                        </p>
                                                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                                                            {selectedCard?.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Main Content Grid */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                    {/* Column 1: Context & Solution */}
                                                    <div className="space-y-8">
                                                        <div className="space-y-3">
                                                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                El Desafío
                                                            </h4>
                                                            <div className="p-8 rounded-2xl bg-muted/10 border border-border/50 relative overflow-hidden group/box">
                                                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover/box:bg-primary transition-colors duration-500" />
                                                                <p className="relative z-10 font-heading text-xl italic leading-relaxed text-foreground">
                                                                    &quot;{selectedCard?.modal?.problem}&quot;
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                                La Solución
                                                            </h4>
                                                            <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                                                {selectedCard?.modal?.solution}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Column 2: Value & Deliverables */}
                                                    <div className="space-y-10">
                                                        {selectedCard?.modal?.benefits && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/50 pb-2">
                                                                    Beneficios Clave
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {selectedCard.modal.benefits.map((benefit, i) => (
                                                                        <li key={i} className="flex items-start gap-3 group/item">
                                                                            <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                                                                <Check className="w-3 h-3" />
                                                                            </div>
                                                                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{benefit}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        <div className="space-y-4">
                                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">
                                                                Lo Que Entregamos
                                                            </h4>
                                                            <ul className="grid gap-3">
                                                                {(selectedCard?.modal?.deliverables || selectedCard?.modal?.features || []).map((item, i) => (
                                                                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border">
                                                                        <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Footer Action */}
                                                <div className="pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between">
                                                    <p className="text-muted-foreground text-sm hidden md:block">
                                                        Alcance y soporte definidos en la propuesta de cada proyecto.
                                                    </p>
                                                    <Button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setContactModalService(activeTab === "ACADEMIA" ? "tesis" : "web")
                                                            setSelectedCard(null)
                                                            setTimeout(() => setIsContactModalOpen(true), 50)
                                                        }}
                                                        className="w-full md:w-auto h-14 px-8 text-lg font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20"
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            Solicitar Diagnóstico Gratuito
                                                            <ArrowRight className="w-5 h-5" />
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Global Contact Modal for Services */}
            <ContactModal
                open={isContactModalOpen}
                onOpenChange={setIsContactModalOpen}
                defaultService={contactModalService}
            />
        </section >
    )
}
