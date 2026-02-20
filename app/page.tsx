

import { HeroSection } from "@/components/sections/hero-section"
import { SocialProof } from "@/components/sections/social-proof"
import { Manifesto } from "@/components/sections/manifesto"
import { UseCases } from "@/components/sections/use-cases"
import { TeamSection } from "@/components/sections/team-section"
import { FinalCTA } from "@/components/sections/final-cta"

import { Methodology } from "@/components/sections/methodology"

import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

import { ServicesTabs } from "@/components/sections/services-tabs"
import { Workshop } from "@/components/sections/workshop"

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-sky-500/30">
      <HeroSection />
      <SocialProof />

      {/* 1. Identidad Filosófica Profunda */}
      <section id="manifiesto">
        <Manifesto />
      </section>

      {/* 2. Uso / El Dolor Principal */}
      <UseCases />

      {/* 3. Solución / Core Business */}
      <section id="servicios">
        <ServicesTabs />
      </section>

      {/* 4. Lead Magnet / Aporte de Valor Gratuito */}
      <Workshop />

      {/* 5. Construcción de Confianza: Metodología */}
      <section id="metodologia">
        <Methodology />
      </section>

      {/* 6. Autoridad / Perfiles y Expertos */}
      <section id="equipo">
        <TeamSection />
      </section>

      {/* 7. Empuje Final de Conversión */}
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />

      <Footer />
    </main>
  )
}

