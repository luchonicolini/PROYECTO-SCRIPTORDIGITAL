"use client"

import Image from "next/image"

export function TeamSection() {
    return (
        <section id="equipo" className="py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block">
                        LIDERAZGO
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-tight">
                        La Alianza <span className="text-muted-foreground italic font-serif">Academia-Tech</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">
                        La unión de dos mundos. El rigor científico de la academia y la potencia escalable de la ingeniería de software.
                    </p>
                </div>

                {/* Team Grid (2 Cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Mercedes */}
                    <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:bg-muted/50 transition-all duration-500">
                        <div className="aspect-[4/3] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/team/mercedes.jpg"
                                alt="Dra. Mercedes Díaz Colodrero"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="p-8 md:p-10 space-y-4">
                            <div>
                                <h3 className="text-2xl font-serif text-foreground font-medium">
                                    Dra. Mercedes Díaz Colodrero
                                </h3>
                                <p className="text-primary text-sm font-bold tracking-widest uppercase mt-2">
                                    Directora Académica
                                </p>
                            </div>
                            <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />
                            <p className="text-muted-foreground text-base leading-relaxed font-light">
                                &quot;Teóloga y especialista en gestión educativa. Garante del rigor metodológico y la excelencia en cada producción intelectual.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Luciano */}
                    <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:bg-muted/50 transition-all duration-500">
                        <div className="aspect-[4/3] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/team/luciano.jpg"
                                alt="Luciano"
                                fill
                                className="object-cover object-[center_60%] scale-110"
                            />
                        </div>
                        <div className="p-8 md:p-10 space-y-4">
                            <div>
                                <h3 className="text-2xl font-serif text-foreground font-medium">
                                    Luciano
                                </h3>
                                <p className="text-primary text-sm font-bold tracking-widest uppercase mt-2">
                                    Director de Infraestructura
                                </p>
                            </div>
                            <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-500" />
                            <p className="text-muted-foreground text-base leading-relaxed font-light">
                                &quot;Especialista en desarrollo de ecosistemas digitales seguros. Responsable de la arquitectura de servidores y protección de datos.&quot;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
