import { BookOpenCheck, Landmark, ShieldCheck, GraduationCap, LockKeyhole } from "lucide-react"

const items = [
    { icon: GraduationCap, text: "Experiencia en Posgrado" },
    { icon: LockKeyhole, text: "Confidencialidad Profesional" },
    { icon: BookOpenCheck, text: "Normas APA" },
    { icon: Landmark, text: "Criterios CONEAU" },
    { icon: ShieldCheck, text: "Protección de datos" },
]

export function SocialProof() {
    return (
        <section className="relative overflow-hidden border-y border-border bg-background/50 py-8 backdrop-blur-sm" aria-label="Criterios de trabajo">
            <div className="container relative z-20 mx-auto mb-6 px-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Criterios que guían nuestro trabajo
                </p>
            </div>

            <div className="relative flex items-center">
                <div className="marquee-track flex w-max shrink-0 gap-6 md:gap-10">
                    {[...items, ...items].map((item, index) => (
                        <div key={`${item.text}-${index}`} className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border/50 bg-muted/40 px-6 py-3 text-muted-foreground">
                            <item.icon className="h-5 w-5 opacity-70" />
                            <span className="font-heading text-base font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-48" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-48" />
        </section>
    )
}
