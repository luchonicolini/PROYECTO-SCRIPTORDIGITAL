

import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { UseCases } from "@/components/use-cases"
import { TrustStrip } from "@/components/trust-strip"
import { TeamSection } from "@/components/team-section"
import { FinalCTA } from "@/components/final-cta"
import { Manifesto } from "@/components/manifesto"

import { Methodology } from "@/components/methodology"

import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

import { ServicesTabs } from "@/components/services-tabs"

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
      <ServicesTabs />

      {/* 3. Trust & Process */}
      <Methodology />

      {/* 3.5 Security Guarantees */}
      <TrustStrip />

      {/* 4. Leadership */}
      <TeamSection />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. Final Conversion */}
      <FinalCTA />

      <Footer />
    </main>
  )
}

