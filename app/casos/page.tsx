import type { Metadata } from "next"
import { SectionPageHero } from "@/components/section-page-hero"
import { CaseStudies } from "@/components/sections/case-studies"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
    title: "Casos y recorridos de trabajo",
    description: "Recorridos representativos de orientación académica, tecnología educativa y desarrollo digital.",
    alternates: { canonical: "/casos" },
}

export default function CasesPage() {
    return (
        <main>
            <SectionPageHero
                eyebrow="Casos de trabajo"
                title="Cada proyecto comienza con"
                highlight="un problema distinto."
                description="Conocé cómo organizamos desafíos académicos, institucionales y digitales para convertirlos en planes de trabajo posibles."
                targetId="casos"
            />
            <CaseStudies />
            <FinalCTA />
            <Footer />
        </main>
    )
}
