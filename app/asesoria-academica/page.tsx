import type { Metadata } from "next"
import { SectionPageHero } from "@/components/section-page-hero"
import { ServiceDetailGrid } from "@/components/service-detail-grid"
import { AcademicIntegrity } from "@/components/sections/academic-integrity"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { SERVICES_DATA } from "@/lib/data"

export const metadata: Metadata = {
    title: "Orientación académica",
    description: "Orientación metodológica, revisión académica y preparación de defensa para investigaciones y trabajos de posgrado.",
    alternates: { canonical: "/asesoria-academica" },
}

export default function AcademicAdvisoryPage() {
    return (
        <main>
            <SectionPageHero
                eyebrow="Orientación académica"
                title="Un proceso más claro para"
                highlight="tu investigación."
                description="Te ayudamos a ordenar el problema, fortalecer la metodología, revisar borradores propios y preparar una defensa que puedas sostener con seguridad."
            />
            <ServiceDetailGrid items={SERVICES_DATA.ACADEMIA} defaultService="tesis" />
            <AcademicIntegrity />
            <FinalCTA />
            <Footer />
        </main>
    )
}
