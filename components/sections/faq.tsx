import { Plus } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/data"

export function FAQ() {
    return (
        <section id="faq" className="relative overflow-hidden bg-background py-24 md:py-32">
            <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-500/10 opacity-50 blur-[120px]" />

            <div className="container relative z-10 mx-auto max-w-6xl px-4">
                <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-24">
                    <div className="space-y-4 lg:sticky lg:top-32 lg:col-span-4">
                        <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            Preguntas y respuestas
                        </span>
                        <h2 className="font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
                            Preguntas <span className="italic text-muted-foreground">frecuentes</span>
                        </h2>
                        <div className="mb-6 h-px w-12 bg-border" />
                        <p className="text-lg font-light leading-relaxed text-muted-foreground">
                            Resolvemos las dudas más comunes sobre autoría, confidencialidad, tiempos y forma de trabajo.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 lg:col-span-8">
                        {FAQ_ITEMS.map((faq) => (
                            <details key={faq.id} className="group rounded-2xl border border-border/60 bg-muted/30 open:border-border open:bg-card open:shadow-lg">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-7 [&::-webkit-details-marker]:hidden">
                                    <h3 className="font-heading text-lg font-medium text-foreground md:text-xl">{faq.question}</h3>
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45 group-open:bg-foreground group-open:text-background">
                                        <Plus className="h-4 w-4" />
                                    </span>
                                </summary>
                                <p className="mx-6 border-t border-border pb-7 pt-5 text-base font-light leading-relaxed text-muted-foreground md:mx-7 md:pr-10 md:text-lg">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
