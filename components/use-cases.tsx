"use client"

import { motion } from "framer-motion"
import { AlertTriangle, FileWarning, MessageSquareWarning } from "lucide-react"

const problems = [
    {
        icon: MessageSquareWarning,
        title: "Desorden WhatsApp",
        description: "Consultas académicas dispersas en chats informales sin trazabilidad ni formalidad institucional.",
        // Styles specific to this card's theme (Orange/Red)
        iconColor: "text-orange-400",
        iconBg: "bg-orange-500/10",
        ringColor: "ring-orange-500/20",
        blurColor: "bg-orange-500/20"
    },
    {
        icon: AlertTriangle,
        title: "Pánico CONEAU",
        description: "Procesos de acreditación que se vuelven pesadillas por falta de documentación organizada y accesible.",
        // Styles specific to this card's theme (Gold/Yellow)
        iconColor: "text-yellow-400",
        iconBg: "bg-yellow-500/10",
        ringColor: "ring-yellow-500/20",
        blurColor: "bg-yellow-500/20"
    },
    {
        icon: FileWarning,
        title: "Piratería PDF",
        description: "Propiedad intelectual vulnerada al compartir materiales educativos en formatos no seguros o inadecuados.",
        // Styles specific to this card's theme (Cyan)
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
        ringColor: "ring-cyan-500/20",
        blurColor: "bg-cyan-500/20"
    }
]

export function UseCases() {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Problemas Comunes</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Identificamos los cuellos de botella que frenan el crecimiento de las instituciones educativas modernas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group relative p-8 h-full rounded-2xl bg-linear-to-b from-white/5 to-transparent border-t border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                                {/* Icon Container with Glow */}
                                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ring-1 backdrop-blur-sm transition-all duration-500 group-hover:scale-110">
                                    {/* The colored blur behind the icon */}
                                    <div className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.blurColor}`} />

                                    {/* The icon background base */}
                                    <div className={`absolute inset-0 rounded-xl ${item.iconBg} ${item.ringColor} ring-1`} />

                                    {/* The Icon itself */}
                                    <item.icon className={`h-8 w-8 relative z-10 ${item.iconColor}`} />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-white font-heading tracking-wide">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
