import { ArrowUpRight, BookOpenCheck, Building2, Check, Code2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const cases = [
    {
        number: "01",
        area: "Orientación académica",
        title: "Necesitás ordenar y avanzar con tu investigación",
        situation: "Tenés una idea o un trabajo iniciado, pero cuesta delimitar el problema, organizar los objetivos o sostener el avance.",
        actions: ["Diagnóstico metodológico", "Plan de trabajo por etapas", "Revisión y preparación de defensa"],
        result: "Un camino claro para avanzar con mayor seguridad y presentar un trabajo genuinamente propio.",
        icon: BookOpenCheck,
    },
    {
        number: "02",
        area: "Gestión institucional",
        title: "Tu equipo trabaja con información dispersa",
        situation: "Alumnos, documentos y seguimientos se administran con herramientas desconectadas que generan tareas repetidas.",
        actions: ["Análisis de procesos", "Sistema de gestión a medida", "Capacitación y soporte"],
        result: "Información centralizada y una operación cotidiana más ordenada para todo el equipo.",
        icon: Building2,
    },
    {
        number: "03",
        area: "Web y aplicaciones",
        title: "Tu presencia digital no refleja el valor de tu servicio",
        situation: "Tu web no explica con claridad lo que ofrecés o no facilita que una visita se convierta en una consulta o una venta.",
        actions: ["Estrategia de contenidos", "Diseño y desarrollo", "Medición de consultas"],
        result: "Una experiencia profesional, fácil de usar y preparada para generar oportunidades comerciales.",
        icon: Code2,
    },
]

export function CaseStudies() {
    return (
        <section id="casos" className="relative overflow-hidden border-y border-border/70 bg-muted/20 py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.07),transparent_38%)]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Ejemplos de trabajo</span>
                    <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
                        ¿En cuál de estas situaciones
                        <span className="italic text-primary"> te encontrás?</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        Identificá tu necesidad y conocé, de forma simple, cómo podemos acompañarte y qué resultado buscamos juntos.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    {cases.map((item) => (
                        <article key={item.number} className="flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl">
                            <div className="flex items-center justify-between border-b border-border bg-muted/25 px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                        <item.icon className="h-5 w-5" />
                                    </span>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{item.area}</p>
                                </div>
                                <span className="font-heading text-3xl text-muted-foreground/30">{item.number}</span>
                            </div>

                            <div className="flex flex-1 flex-col p-6 md:p-7">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Tu situación</p>
                                    <h3 className="mt-3 break-words font-heading text-2xl font-semibold leading-tight text-foreground">{item.title}</h3>
                                    <p className="mt-4 break-words text-base leading-relaxed text-muted-foreground">{item.situation}</p>
                                </div>

                                <div className="mt-7 border-t border-border pt-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Qué hacemos</p>
                                    <ul className="mt-4 space-y-3">
                                        {item.actions.map((action) => (
                                            <li key={action} className="flex items-start gap-3 text-base font-medium text-foreground/85">
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                    <Check className="h-3 w-3" />
                                                </span>
                                                {action}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Qué obtenés</p>
                                    <p className="mt-2 text-base font-medium leading-relaxed text-foreground">{item.result}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[1.5rem] border border-border bg-background/80 p-6 text-center backdrop-blur-sm md:flex-row md:px-8 md:text-left">
                    <div>
                        <p className="font-heading text-xl font-semibold text-foreground">¿No sabés exactamente qué necesitás?</p>
                        <p className="mt-1 text-base leading-relaxed text-muted-foreground">Contanos tu situación. En la primera conversación definimos si podemos ayudarte y cuál sería el siguiente paso.</p>
                    </div>
                    <Button asChild className="h-12 shrink-0 rounded-full px-6 font-bold">
                        <Link href="/contacto">
                            Contar mi proyecto
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    Situaciones representativas · La información de clientes se mantiene confidencial
                </p>
            </div>
        </section>
    )
}
