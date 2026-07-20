import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceItem {
    id: string
    title: string
    desc: string
    icon: React.ElementType
    modal: {
        solution: string
        features: string[]
        deliverables?: string[]
    }
}

export function ServiceDetailGrid({ items, defaultService }: { items: ServiceItem[]; defaultService: string }) {
    return (
        <section id="contenido" className="bg-background py-20 md:py-28">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid gap-6 lg:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.id} className="flex flex-col rounded-[2rem] border border-border bg-card p-7 shadow-sm md:p-8">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h2 className="mt-7 font-heading text-2xl font-semibold leading-tight text-foreground">{item.title}</h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{item.modal.solution}</p>

                            <ul className="mt-7 space-y-3 border-t border-border pt-6">
                                {(item.modal.deliverables ?? item.modal.features).slice(0, 3).map((detail) => (
                                    <li key={detail} className="flex items-start gap-3 text-base text-foreground/85">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-8">
                                <Button asChild variant="outline" className="w-full rounded-xl">
                                    <Link href={`/contacto?servicio=${defaultService}`}>
                                        Consultar por este servicio
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
