

import { HeroSection } from "@/components/sections/hero-section"
import { SocialProof } from "@/components/sections/social-proof"
import { AboutSection } from "@/components/sections/about-section"
import { FinalCTA } from "@/components/sections/final-cta"

import { Methodology } from "@/components/sections/methodology"

import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

import { ServicesTabs } from "@/components/sections/services-tabs"
import { Workshop } from "@/components/sections/workshop"
import { CaseStudies } from "@/components/sections/case-studies"
import { AcademicIntegrity } from "@/components/sections/academic-integrity"

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-sky-500/30">
      <HeroSection />
      <SocialProof />

      {/* 1. Oferta principal */}
      <ServicesTabs />

      {/* 2. Compromiso de autoría e integridad académica */}
      <AcademicIntegrity />

      {/* 3. Recorridos de intervención y resultados */}
      <CaseStudies />

      {/* 4. Recurso educativo — se revisará en la fase siguiente */}
      <Workshop />

      {/* 5. Proceso de trabajo */}
      <Methodology />

      {/* 6. Equipo */}
      <AboutSection />

      {/* 7. Preguntas y conversión */}
      <FAQ />
      <FinalCTA />

      <Footer />
    </main>
  )
}

