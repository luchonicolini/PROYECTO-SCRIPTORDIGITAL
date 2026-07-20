import { FileCheck2, GraduationCap, ShieldCheck } from "lucide-react"

const principles = [
    {
        icon: GraduationCap,
        title: "Tu autoría es irremplazable",
        description: "No escribimos tesis ni realizamos evaluaciones en nombre de otra persona. Tu trabajo, tus ideas y tus decisiones siguen siendo tuyas.",
    },
    {
        icon: FileCheck2,
        title: "Orientación que deja capacidad",
        description: "Explicamos, revisamos y devolvemos criterios para que puedas comprender el proceso y sostener cada decisión frente a tu institución.",
    },
    {
        icon: ShieldCheck,
        title: "Reserva profesional",
        description: "Protegemos borradores, datos e información sensible. Cuando el proyecto lo requiere, formalizamos la confidencialidad mediante un NDA.",
    },
]

export function AcademicIntegrity() {
    return (
        <section className="bg-background py-20 md:py-24" aria-labelledby="integridad-title">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-editorial px-7 py-10 text-white shadow-2xl md:px-12 md:py-14">
                    <div className="absolute -right-32 -top-44 h-96 w-96 rounded-full border border-brand-gold/15" />
                    <div className="absolute -right-16 -top-36 h-72 w-72 rounded-full border border-white/5" />

                    <div className="relative grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Compromiso ético</p>
                            <h2 id="integridad-title" className="mt-4 max-w-xl font-heading text-3xl font-medium leading-tight md:text-5xl">
                                Orientación rigurosa.<br />Autoría siempre propia.
                            </h2>
                        </div>
                        <div className="lg:pb-1">
                            <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                                Acompañamos el aprendizaje y el proceso de investigación con criterios claros, sin reemplazar la voz, el pensamiento ni la responsabilidad académica de cada persona.
                            </p>
                            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold-soft">
                                <ShieldCheck className="h-4 w-4" />
                                Autoría · Orientación · Confidencialidad
                            </div>
                        </div>
                    </div>

                    <div className="relative grid md:grid-cols-3">
                        {principles.map((principle, index) => (
                            <article key={principle.title} className="relative border-t border-white/10 py-8 first:border-t-0 md:border-l md:border-t-0 md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold-soft">
                                        <principle.icon className="h-4 w-4" />
                                    </div>
                                    <span className="font-heading text-3xl text-white/15">0{index + 1}</span>
                                </div>
                                <h3 className="mt-6 font-heading text-xl font-semibold leading-tight text-white">{principle.title}</h3>
                                <p className="mt-3 text-base leading-relaxed text-white/70">{principle.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
