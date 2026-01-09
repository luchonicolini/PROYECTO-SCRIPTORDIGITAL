

import { HeroSection } from "@/components/hero-section"
import { Manifesto } from "@/components/manifesto"

import { Methodology } from "@/components/methodology"

import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

import { ServicesTabs } from "@/components/services-tabs"

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-sky-500/30">
      <HeroSection />

      {/* 2. The Solution (Menu) */}
      <ServicesTabs />

      {/* 3. Trust & Process */}
      <Methodology />

      {/* 4. Philosophy */}
      <section id="manifiesto">
        <Manifesto />
      </section>

      {/* 6. Closing */}
      <FAQ />
      <Footer />
    </main>
  )
}

