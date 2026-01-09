"use client"

import { motion } from "framer-motion"
import { BookOpen, Scale, Landmark, Terminal, Cloud, ShieldCheck } from "lucide-react"

const services = [
    {
        icon: BookOpen,
        title: "Dirección de Tesis & Posgrados",
        description: "Acompañamiento metodológico riguroso para doctorandos e investigadores. Desde la hipótesis hasta la defensa.",
        borderColor: "border-[#D4AF37]/20 hover:border-[#D4AF37]/50",
        iconColor: "text-[#D4AF37]",
        iconBg: "bg-[#D4AF37]/10"
    },
    {
        icon: Scale,
        title: "Consultoría Legal Educativa",
        description: "Asesoramiento jurídico integral para instituciones educativas. Normativas, estatutos y regulaciones vigentes.",
        borderColor: "border-[#D4AF37]/20 hover:border-[#D4AF37]/50",
        iconColor: "text-[#D4AF37]",
        iconBg: "bg-[#D4AF37]/10"
    },
    {
        icon: Landmark,
        title: "Gestión CONEAU",
        description: "Expertise en procesos de acreditación y evaluación institucional. Aseguramiento de la calidad académica.",
        borderColor: "border-[#D4AF37]/20 hover:border-[#D4AF37]/50",
        iconColor: "text-[#D4AF37]",
        iconBg: "bg-[#D4AF37]/10"
    },
    {
        icon: Terminal,
        title: "Desarrollo de Web Apps",
        description: "Arquitecturas modernas (Next.js, React) escalables y performantes. Software a medida para necesidades complejas.",
        borderColor: "border-violet-500/20 hover:border-violet-500/50",
        iconColor: "text-violet-500",
        iconBg: "bg-violet-500/10"
    },
    {
        icon: Cloud,
        title: "Plataformas LMS",
        description: "Implementación y personalización de entornos virtuales de aprendizaje (Moodle, Canvas) integrados.",
        borderColor: "border-violet-500/20 hover:border-violet-500/50",
        iconColor: "text-violet-500",
        iconBg: "bg-violet-500/10"
    },
    {
        icon: ShieldCheck,
        title: "Seguridad & Infraestructura",
        description: "Auditoría de sistemas, protección de datos y despliegue en la nube (AWS, Vercel). Robustez garantizada.",
        borderColor: "border-violet-500/20 hover:border-violet-500/50",
        iconColor: "text-violet-500",
        iconBg: "bg-violet-500/10"
    }
]

export function ServicesGrid() {
    return (
        <section id="servicios" className="py-24 bg-[#030712] relative min-h-screen flex flex-col justify-center">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[128px] bg-violet-400/10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[128px] bg-purple-900/10" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 border min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white/5 ${service.borderColor}`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-8 ${service.iconBg} ${service.iconColor}`}>
                                <service.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-serif text-white mb-4 uppercase leading-tight">
                                {service.title}
                            </h3>

                            <p className="text-white/60 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
