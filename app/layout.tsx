import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/react"
// Theme: Ivy League Tech (Deep Navy & Gold)

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scriptordigital.vercel.app"

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scriptor Digital | Agencia de Desarrollo Premium",
    template: "%s | Scriptor Digital",
  },
  description: "Elevando el estándar de la educación digital y la presencia institucional con tecnología de vanguardia y diseño premium. Web, Apps y Estrategia Digital.",
  alternates: { canonical: "/" },
  applicationName: "Scriptor Digital",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Scriptor Digital | Agencia de Desarrollo Premium",
    description: "Elevando el estándar de la educación digital y la presencia institucional con tecnología de vanguardia y diseño premium.",
    siteName: "Scriptor Digital",
    images: [{ url: "/images/hero-bg.png", alt: "Scriptor Digital — Consultoría académica y desarrollo tecnológico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptor Digital | Agencia de Desarrollo Premium",
    description: "Elevando el estándar de la educación digital y la presencia institucional.",
    images: ["/images/hero-bg.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar />
          <SmoothScroll>
            {children}
            <Analytics />
          </SmoothScroll>
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scriptor Digital",
              "url": siteUrl,
              "logo": `${siteUrl}/icon.png`,
              "description": "Elevando el estándar de la educación digital y la presencia institucional con tecnología de vanguardia y diseño premium.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "scriptordigitaloficial@gmail.com"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
