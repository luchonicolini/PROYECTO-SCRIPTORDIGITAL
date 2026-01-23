import { FileKey, Copyright, ShieldCheck, Server } from "lucide-react"

export function TrustStrip() {
    const items = [
        {
            icon: FileKey,
            label: "CONFIDENCIALIDAD TOTAL",
        },
        {
            icon: Copyright,
            label: "PROPIEDAD INTELECTUAL 100%",
        },
        {
            icon: ShieldCheck,
            label: "SEGURIDAD DE GRADO BANCARIO",
        },
        {
            icon: Server,
            label: "INFRAESTRUCTURA PROPIA",
        },
    ]

    return (
        <section className="py-10 bg-primary/5 border-y border-primary/10 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {items.map((item, i) => (
                        <div key={i} className="group flex items-center gap-3 cursor-default transition-all duration-300 hover:scale-105">
                            <div className="p-2 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-foreground/90 uppercase group-hover:text-primary transition-colors duration-300">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
