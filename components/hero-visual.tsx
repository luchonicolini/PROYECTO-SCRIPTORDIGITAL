"use client"

import { motion } from "framer-motion"
import { Monitor, Zap } from "lucide-react"

export function HeroVisual() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full max-w-md mx-auto aspect-[4/3] md:min-h-[350px]"
        >
            {/* Glow Behind */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse-slow z-0" />

            {/* MAIN CARD: GLASS TERMINAL */}
            <div className="relative z-10 w-full h-full bg-[#0a0a0b]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col">

                {/* Header Bar */}
                <div className="h-10 px-4 flex items-center justify-between border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-muted-foreground/60 uppercase tracking-widest">
                        <Monitor className="w-3 h-3" />
                        <span>SYSTEM.CORE <span className="text-primary/50">v2.0.4</span></span>
                    </div>
                </div>

                {/* Content Area: Code Editor */}
                <div className="flex-1 p-6 font-mono text-sm leading-relaxed relative overflow-hidden">

                    {/* Line Numbers */}
                    <div className="absolute left-6 top-6 bottom-6 w-6 text-right text-muted-foreground/20 select-none flex flex-col gap-[2px] font-medium text-xs">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                    </div>

                    {/* Code Content */}
                    <div className="pl-8 text-muted-foreground/80 text-xs sm:text-sm">
                        <div className="mb-4">
                            <span className="text-muted-foreground/40">{"// Definición de Valor"}</span>
                        </div>

                        <div>
                            <span className="text-purple-400">interface</span> <span className="text-foreground font-bold">DigitalExcellence</span> <span className="text-white">{"{"}</span>
                        </div>

                        <div className="pl-6 py-1">
                            <span className="text-blue-400">input</span>: <span className="text-green-400">&quot;Academic_Rigor&quot;</span>;
                        </div>

                        <div className="pl-6 py-1">
                            <span className="text-blue-400">process</span>: <span className="text-green-400">&quot;Premium_Dev&quot;</span>;
                        </div>

                        <div className="pl-6 py-1">
                            <span className="text-blue-400">output</span>: <span className="text-green-400">&quot;Market_Leader&quot;</span>;
                        </div>

                        <div>
                            <span className="text-white">{"}"}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Panel */}
                <div className="px-6 pb-6">
                    <div className="bg-[#1a1b1e] border border-white/5 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                        <span className="text-xs font-medium text-yellow-500/90 tracking-wide">Compilation Successful</span>

                        <div className="ml-auto w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent rounded-full" />
                    </div>
                </div>

            </div>

            {/* Decorative Floating Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 z-20 bg-background/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3"
            >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground">Performance</span>
                    <span className="text-xs font-bold text-foreground">99.8%</span>
                </div>
            </motion.div>

        </motion.div>
    )
}
