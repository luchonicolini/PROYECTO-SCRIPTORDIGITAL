"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <section id="sobre-nosotros" className="py-32 md:py-48 bg-background relative overflow-hidden">
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
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground font-medium leading-[1.1]">
                                Nuestro <br />
                                <span className="text-muted-foreground italic font-light">Equipo</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p>
                                Scriptor Digital es un equipo multidisciplinario liderado por profesionales que entienden ambos extremos del espectro: el <strong className="font-medium text-foreground">rigor académico</strong> y la <strong className="font-medium text-foreground">ingeniería de software moderna</strong>.
                            </p>
                            <p>
                                Sabemos que detrás de cada gran proyecto hay más que solo código; hay procesos, calidad intelectual y la necesidad de escalar sin perder la esencia.
                            </p>
                            <p>
                                Por eso, hemos consolidado un equipo de trabajo capaz de abordar desde la estructura de los datos hasta la precisión del texto, asegurando excelencia en cada etapa.
                            </p>
                        </div>

                        {/* Stats / Highlight */}
                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                            <div>
                                <h4 className="text-3xl font-serif text-foreground mb-1">100%</h4>
                                <p className="text-sm tracking-wider text-muted-foreground uppercase font-medium">Enfoque a Medida</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-foreground mb-1">Rigor</h4>
                                <p className="text-sm tracking-wider text-muted-foreground uppercase font-medium">Científico & Técnico</p>
                            </div>
                        </div>
                    </div>

                    {/* Profiles Side */}
                    <div className="lg:col-span-7 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Profile 1 - Mercedes (Offset slightly down) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="group relative bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 md:mt-12"
                            >
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
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                    <h3 className="text-2xl font-serif text-white font-medium mb-1">
                                        Mercedes Díaz Colodrero
                                    </h3>
                                    <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        Escribana & Especialista
                                    </p>
                                    <p className="text-white/80 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Especialista en docencia universitaria y gestión educativa. Garante del rigor metodológico y la excelencia en cada producción intelectual.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Profile 2 - Luciano */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="group relative bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 md:-mt-12 md:mb-24"
                            >
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
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                    <h3 className="text-2xl font-serif text-white font-medium mb-1">
                                        Luciano Nicolini
                                    </h3>
                                    <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        Desarrollador iOS & Web
                                    </p>
                                    <p className="text-white/80 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Arquitecto de ecosistemas digitales escalables. Intersección precisa entre el diseño de interacciones y la ingeniería moderna segura.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
