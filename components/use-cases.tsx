import { MessageCircle, FileX, AlertTriangle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function UseCases() {
    const cases = [
        {
            id: "01",
            icon: MessageCircle,
            title: "La 'Oficina de Bolsillo' sin Límites",
            desc: "Tu vida personal invadida. Mensajes de alumnos o clientes mezclados con los de tu familia un domingo por la noche. Sin historial oficial, sin trazabilidad y con un 'burnout' digital silencioso.",
            accent: "group-hover:text-cyan-400",
            border: "hover:border-cyan-500/50",
            iconBg: "group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40",
            iconColor: "group-hover:text-cyan-200"
        },
        {
            id: "02",
            icon: FileX,
            title: "El Laberinto de las Correcciones",
            desc: "Investigaciones brillantes estancadas por burocracia técnica. El ciclo infinito de rechazos por normas de formato (APA/Corrección) que te impiden defender tu tesis y avanzar en tu carrera.",
            accent: "group-hover:text-violet-400",
            border: "hover:border-violet-500/50",
            iconBg: "group-hover:bg-violet-500/20 group-hover:border-violet-500/40",
            iconColor: "group-hover:text-violet-200"
        },
        {
            id: "03",
            icon: AlertTriangle,
            title: "Gestión Atada con Alambre",
            desc: "El peligro de dirigir una institución desde Excel. Archivos corruptos, versiones duplicadas ('final_v2.xlsx') y datos sensibles de facturación expuestos a errores humanos irreversibles.",
            accent: "group-hover:text-emerald-400",
            border: "hover:border-emerald-500/50",
            iconBg: "group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
            iconColor: "group-hover:text-emerald-200"
        }
    ]

    return (
        <section className="py-24 bg-[#050511] relative overflow-hidden">
            {/* Background Gradient similar to Services */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-violet-900/10 to-cyan-900/10 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-xs font-bold tracking-[0.3em] text-violet-400 uppercase">
                            Diagnóstico
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Desafíos que <br />
                            <span className="text-white/60 italic">Debemos Resolver</span>
                        </h2>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative flex flex-col p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300",
                                item.border,
                                "hover:shadow-2xl hover:-translate-y-2"
                            )}
                        >
                            {/* Icon Header (Exact match to ServicesTabs) */}
                            <div className="flex items-start justify-between mb-8">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300",
                                    "bg-white/5 border-white/10 shadow-inner",
                                    item.iconBg
                                )}>
                                    <item.icon className={cn(
                                        "w-8 h-8 transition-colors duration-300 text-gray-400",
                                        item.iconColor
                                    )} />
                                </div>

                                <span className={cn(
                                    "text-4xl font-serif font-bold text-white/5 transition-colors duration-300 group-hover:text-white/10"
                                )}>
                                    {item.id}
                                </span>
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
                            </div>

                            {/* Footer / Action Hint (Subtle) */}
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className={cn("text-xs font-bold uppercase tracking-widest", item.accent)}>
                                    Identificado
                                </span>
                                <ArrowRight className={cn("w-5 h-5", item.accent)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
