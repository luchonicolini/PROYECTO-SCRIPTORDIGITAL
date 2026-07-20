import { METHODOLOGY_STEPS } from "@/lib/data"


export function Methodology() {
    return (
        <section id="metodologia" className="py-24 md:py-32 bg-secondary/50 dark:bg-background relative overflow-hidden">
            {/* Subtle Grid Background (Matches UseCases) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="mb-14 text-center max-w-3xl mx-auto space-y-4">
                    <span className="block text-sm font-bold tracking-[0.2em] text-primary uppercase">
                        NUESTRO PROCESO
                    </span>
                    <h2 className="font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
                        Un proceso claro, de la <span className="text-muted-foreground italic">idea a la entrega</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light mt-6">
                        Organizamos cada proyecto en etapas concretas. Vas a saber qué estamos haciendo,
                        qué necesitamos de tu parte y cuál es el próximo paso.
                    </p>
                </div>

                {/* Horizontal Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

                    {METHODOLOGY_STEPS.map((step) => (
                        <article
                            key={step.number}
                            className="group relative p-8 rounded-3xl bg-card backdrop-blur-md border border-border overflow-hidden hover:bg-muted/50 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="flex flex-col h-full justify-between space-y-6">
                                <div>
                                    {/* Icon Box (Matches ServicesTabs style) */}
                                    <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 mb-6 shadow-inner">
                                        <step.icon className="w-6 h-6" />
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-bold tracking-widest text-primary/80 uppercase border border-primary/20 px-2 py-1 rounded bg-primary/5">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="mb-4 font-heading text-xl font-medium leading-tight text-foreground group-hover:text-foreground/90">
                                        {step.title}
                                    </h3>
                                    <div className="h-px w-8 bg-border group-hover:w-full transition-all duration-500 mb-4" />

                                    <p className="text-base leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}
