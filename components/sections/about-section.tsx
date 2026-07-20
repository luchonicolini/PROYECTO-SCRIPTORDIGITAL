import Image from "next/image"

export function AboutSection() {
    return (
        <section id="equipo" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background elements for premium feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Story / Narrative Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/20 rounded-full bg-primary/5">
                                Quiénes Somos
                            </span>
                    <h2 className="font-heading text-4xl font-medium leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
                                Nuestro <br />
                                <span className="text-muted-foreground italic font-light">Equipo</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p>
                                Scriptor Digital combina dos áreas complementarias: el <strong className="font-medium text-foreground">acompañamiento académico</strong> y el <strong className="font-medium text-foreground">desarrollo de sitios web y aplicaciones móviles</strong>.
                            </p>
                            <p>
                                Sabemos que detrás de cada gran proyecto hay más que solo código; hay procesos, calidad intelectual y la necesidad de escalar sin perder la esencia.
                            </p>
                            <p>
                                Trabajamos de forma complementaria para abordar tanto la estructura de los datos como la precisión del texto, con criterios claros en cada etapa.
                            </p>
                        </div>

                        {/* Stats / Highlight */}
                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                            <div>
                                <h4 className="mb-1 font-heading text-3xl text-foreground">100%</h4>
                                <p className="text-sm tracking-wider text-muted-foreground uppercase font-medium">Enfoque a Medida</p>
                            </div>
                            <div>
                                <h4 className="mb-1 font-heading text-3xl text-foreground">Web & Apps</h4>
                                <p className="text-sm tracking-wider text-muted-foreground uppercase font-medium">Desarrollo a medida</p>
                            </div>
                        </div>
                    </div>

                    {/* Profiles Side */}
                    <div className="lg:col-span-7 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Profile 1 - Mercedes (Offset slightly down) */}
                            <article className="group relative bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 md:mt-8">
                                <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/team/mercedes.webp"
                                        alt="Dra. Mercedes Díaz Colodrero"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                                    <h3 className="mb-1 font-heading text-2xl font-medium text-white">
                                        Mercedes Díaz Colodrero
                                    </h3>
                                    <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        Escribana & Especialista
                                    </p>
                                    <p className="text-base leading-relaxed text-white/80">
                                        Especialista en docencia universitaria y gestión educativa. Aporta criterio metodológico y experiencia en producción académica.
                                    </p>
                                </div>
                            </article>

                            {/* Profile 2 - Luciano */}
                            <article className="group relative bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 md:-mt-8 md:mb-16">
                                <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/team/luciano.webp"
                                        alt="Luciano Nicolini"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-[center_60%] scale-110 group-hover:scale-115 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                                    <h3 className="mb-1 font-heading text-2xl font-medium text-white">
                                        Luciano Nicolini
                                    </h3>
                                    <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        Programador Web & Mobile
                                    </p>
                                    <p className="text-base leading-relaxed text-white/80">
                                        Crea sitios web, aplicaciones móviles y productos digitales orientados a ventas, gestión y crecimiento de negocios.
                                    </p>
                                </div>
                            </article>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
