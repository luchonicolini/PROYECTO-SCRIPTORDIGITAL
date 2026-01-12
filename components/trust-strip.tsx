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
        <section className="py-12 bg-black border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
                    {items.map((item, i) => (
                        <div key={i} className="group flex items-center gap-3 cursor-default">
                            <item.icon className="w-5 h-5 text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-300" />
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-600 uppercase group-hover:text-white transition-colors duration-300">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
