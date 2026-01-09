"use client"

import { motion } from "framer-motion"
import { Database, Lock, ShieldCheck } from "lucide-react"

export function TechSecurity() {
    const features = [
        {
            icon: Lock,
            text: "Encriptación SSL"
        },
        {
            icon: Database,
            text: "Backups Diarios"
        },
        {
            icon: ShieldCheck,
            text: "Infraestructura Cloud"
        }
    ]

    return (
        <section className="py-12 bg-black border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.text}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
                        >
                            <feature.icon className="w-5 h-5 text-violet-500" />
                            <span className="text-sm font-medium tracking-wide uppercase">{feature.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
