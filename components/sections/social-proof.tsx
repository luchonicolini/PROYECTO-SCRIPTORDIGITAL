"use client"

import { BookOpenCheck, Landmark, ShieldCheck, GraduationCap, LockKeyhole } from "lucide-react"
import { motion } from "framer-motion"

export function SocialProof() {
    const items = [
        { icon: GraduationCap, text: "+50 Tesis Aprobadas" },
        { icon: LockKeyhole, text: "100% Confidencial" },
        { icon: BookOpenCheck, text: "Normas APA" },
        { icon: Landmark, text: "Aval CONEAU" },
        { icon: ShieldCheck, text: "SSL Secure" },
    ]

    return (
        <section className="py-8 border-y border-border bg-background/50 overflow-hidden relative backdrop-blur-sm">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-4 text-center mb-6 relative z-20">
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                    Potenciado por estándares de clase mundial
                </p>
            </div>

            <div className="flex relative items-center">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex shrink-0 gap-6 md:gap-12 w-max"
                >
                    {/* Double the items to create a seamless loop */}
                    {[...items, ...items, ...items, ...items].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300"
                        >
                            <item.icon className="h-5 w-5 opacity-70" />
                            <span className="font-serif text-sm md:text-base font-medium whitespace-nowrap">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
