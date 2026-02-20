

import Image from "next/image"

export function TeamSection() {
    return (
        <section id="equipo" className="py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto space-y-4">
                    <span className="block text-sm font-bold tracking-[0.2em] text-primary uppercase">
                        LIDERAZGO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground font-medium leading-tight">
                        La Alianza <span className="text-muted-foreground italic">Academia-Tech</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light mt-6">
                        La unión de dos mundos. El rigor científico de la academia y la potencia escalable de la ingeniería de software.
                    </p>
                </div>

                {/* Team Grid (2 Cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Mercedes */}
                    <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:bg-muted/50 transition-all duration-500">
                        <div className="aspect-[4/3] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/team/mercedes.webp"
                                alt="Dra. Mercedes Díaz Colodrero"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="p-8 md:p-10 space-y-4">
                            <div>
                                <h3 className="text-2xl font-serif text-foreground font-medium">
                                    Escribana y Especialista Mercedes Díaz Colodrero
                                </h3>
                                <p className="text-primary text-sm font-bold tracking-widest uppercase mt-2">
                                    Directora Académica
                                </p>
                            </div>
                            <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />
                            <p className="text-muted-foreground text-base leading-relaxed font-light">
                                &quot;Especialista en docencia universitaria y gestión educativa. Garante del rigor metodológico y la excelencia en cada producción intelectual.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Luciano */}
                    <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:bg-muted/50 transition-all duration-500">
                        <div className="aspect-[4/3] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/team/luciano.webp"
                                alt="Luciano"
                                fill
                                className="object-cover object-[center_60%] scale-110"
                            />
                        </div>
                        <div className="p-8 md:p-10 space-y-4">
                            <div>
                                <h3 className="text-2xl font-serif text-foreground font-medium">
                                    Luciano Nicolini
                                </h3>
                                <p className="text-primary text-sm font-bold tracking-widest uppercase mt-2">
                                    Desarrollador iOS & Web
                                </p>
                            </div>
                            <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />
                            <p className="text-muted-foreground text-base leading-relaxed font-light">
                                &quot;Programador especialista en desarrollo iOS y soluciones Web. Arquitecto de ecosistemas digitales escalables y seguros.&quot;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
