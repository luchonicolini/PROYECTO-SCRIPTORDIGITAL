import type { Metadata } from "next"
import { SectionPageHero } from "@/components/section-page-hero"
import { AboutSection } from "@/components/sections/about-section"
import { Methodology } from "@/components/sections/methodology"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
    title: "Equipo y forma de trabajo",
    description: "Conocé al equipo de Scriptor Digital y el proceso con el que abordamos cada proyecto.",
    alternates: { canonical: "/nosotros" },
}

export default function AboutPage() {
    return (
        <main>
            <SectionPageHero
                eyebrow="Scriptor Digital"
                title="Dos disciplinas que trabajan"
                highlight="de forma complementaria."
                description="Combinamos experiencia académica con desarrollo de sitios web, aplicaciones móviles y productos digitales orientados a necesidades reales."
                targetId="equipo"
            />
            <AboutSection />
            <Methodology />
            <FinalCTA />
            <Footer />
        </main>
    )
}
