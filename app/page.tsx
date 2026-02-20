

import { HeroSection } from "@/components/sections/hero-section"
import { SocialProof } from "@/components/sections/social-proof"
import { UseCases } from "@/components/sections/use-cases"
import { TrustStrip } from "@/components/sections/trust-strip"
import { TeamSection } from "@/components/sections/team-section"
import { FinalCTA } from "@/components/sections/final-cta"
import { Manifesto } from "@/components/sections/manifesto"

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

      {/* 1. Philosophy (Manifesto) */}
      <section id="manifiesto">
        <Manifesto />
      </section>

      {/* 1.5 Pain Points */}
      <UseCases />

      {/* 2. The Solution (Menu) */}
      <section id="servicios">
        <ServicesTabs />
      </section>

      {/* 2.5 Lead Magnet / Workshop */}
      <Workshop />

      {/* 3. Trust & Process */}
      <section id="metodologia">
        <Methodology />
      </section>

      {/* 3.5 Security Guarantees */}
      <TrustStrip />

      {/* 4. Leadership */}
      <section id="equipo">
        <TeamSection />
      </section>

      {/* 6. FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* 7. Final Conversion */}
      <FinalCTA />

      <Footer />
    </main>
  )
}

