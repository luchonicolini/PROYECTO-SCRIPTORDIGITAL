import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
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
    default: "Scriptor Digital | Consultoría académica y tecnología",
    template: "%s | Scriptor Digital",
  },
  description: "Orientación metodológica y soluciones digitales para profesionales e instituciones. Investigación, desarrollo web y tecnología educativa.",
  alternates: { canonical: "/" },
  applicationName: "Scriptor Digital",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Scriptor Digital | Consultoría académica y tecnología",
    description: "Orientación metodológica y soluciones digitales para profesionales e instituciones.",
    siteName: "Scriptor Digital",
    images: [{ url: "/images/hero-bg.png", alt: "Scriptor Digital — Consultoría académica y desarrollo tecnológico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptor Digital | Consultoría académica y tecnología",
    description: "Orientación metodológica y soluciones digitales para profesionales e instituciones.",
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
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
        <Script
          id="scriptor-organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scriptor Digital",
              "url": siteUrl,
              "logo": `${siteUrl}/icon.png`,
              "description": "Orientación metodológica y soluciones digitales para profesionales e instituciones.",
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
