import { MessageCircle, FileX, AlertTriangle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function UseCases() {
    const cases = [
        {
            id: "01",
            icon: MessageCircle, // Keeping original icons as new data doesn't specify
            title: "Tesis Estancada",
            desc: "Meses de investigación sin avance real. La estructura académica es sólida, pero la dirección metodológica es difusa. Necesitas claridad y un plan de acción.",
            accent: "group-hover:text-primary",
            border: "hover:border-primary/50",
            iconBg: "group-hover:bg-primary/10 group-hover:border-primary/30",
            iconColor: "group-hover:text-primary"
        },
        {
            id: "02",
            icon: FileX, // Keeping original icons as new data doesn't specify
            title: "Software Obsoleto",
            desc: "Sistemas legacy que frenan la innovación. Seguridad comprometida, UX deficiente y costos de mantenimiento insostenibles.",
            accent: "group-hover:text-primary",
            border: "hover:border-primary/50",
            iconBg: "group-hover:bg-primary/10 group-hover:border-primary/30",
            iconColor: "group-hover:text-primary"
        },
        {
            id: "03",
            icon: AlertTriangle, // Keeping original icons as new data doesn't specify
            title: "Identidad Digital",
            desc: "Una presencia online que no refleja tu prestigio institucional. Webs estáticas que no convierten ni comunican autoridad.",
            accent: "group-hover:text-primary",
            border: "hover:border-primary/50",
            iconBg: "group-hover:bg-primary/10 group-hover:border-primary/30",
            iconColor: "group-hover:text-primary"
        }
    ]

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradient similar to Services */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-secondary/5 to-indigo-500/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="mb-24 text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                            Diagnóstico
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                            Desafíos que <br />
                            <span className="text-muted-foreground italic">Debemos Resolver</span>
                        </h2>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative flex flex-col p-8 md:p-10 rounded-3xl bg-card backdrop-blur-md border border-border overflow-hidden transition-all duration-300",
                                item.border,
                                "hover:shadow-2xl hover:-translate-y-2"
                            )}
                        >
                            {/* Icon Header (Exact match to ServicesTabs) */}
                            <div className="flex items-start justify-between mb-8">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300",
                                    "bg-muted border-border shadow-inner",
                                    item.iconBg
                                )}>
                                    <item.icon className={cn(
                                        "w-8 h-8 transition-colors duration-300 text-muted-foreground",
                                        item.iconColor
                                    )} />
                                </div>

                                <span className={cn(
                                    "text-4xl font-serif font-bold text-foreground/5 transition-colors duration-300 group-hover:text-foreground/10"
                                )}>
                                    {item.id}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-6 flex-1">
                                <h3 className="text-3xl font-serif text-foreground font-medium group-hover:text-foreground/90 leading-tight">
                                    {item.title}
                                </h3>

                                <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />

                                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Footer / Action Hint (Subtle) */}
                            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
