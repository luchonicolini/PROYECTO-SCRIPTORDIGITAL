import type { Metadata } from "next"
import { SectionPageHero } from "@/components/section-page-hero"
import { ServiceDetailGrid } from "@/components/service-detail-grid"
import { Methodology } from "@/components/sections/methodology"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { SERVICES_DATA } from "@/lib/data"

export const metadata: Metadata = {
    title: "Soluciones tecnológicas",
    description: "Aplicaciones web, plataformas educativas e infraestructura digital para profesionales e instituciones.",
    alternates: { canonical: "/soluciones-tecnologicas" },
}

export default function TechnologySolutionsPage() {
    return (
        <main>
            <SectionPageHero
                eyebrow="Soluciones tecnológicas"
                title="Tecnología pensada para"
                highlight="simplificar tu gestión."
                description="Diseñamos aplicaciones web, plataformas educativas e infraestructura digital a partir de procesos reales y objetivos concretos."
            />
            <ServiceDetailGrid items={SERVICES_DATA.TECNOLOGIA} defaultService="web" />
            <Methodology />
            <FinalCTA />
            <Footer />
        </main>
    )
}
