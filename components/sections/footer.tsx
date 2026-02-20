"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data"

import { ParticlesBackground } from "@/components/particles-background"
import { Logo } from "@/components/logo"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Footer() {
    return (
        <footer className="relative bg-background border-t border-border overflow-hidden text-foreground">
            <ParticlesBackground quantity={50} className="absolute inset-0 h-full w-full pointer-events-none opacity-40" />
            <div className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
                >
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="block mb-6">
                            <Logo />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Elevando el estándar de la educación digital y la presencia institucional con tecnología de vanguardia y diseño premium.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <SocialLink
                                    key={social.label}
                                    href={social.href}
                                    icon={<social.icon className="w-5 h-5" />}
                                    label={social.label}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h4 className="font-bold mb-6 text-foreground">Explorar</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {FOOTER_LINKS.EXPLORE.filter(link => link.label !== "Blog").map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href}>{link.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h4 className="font-bold mb-6 text-foreground">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {FOOTER_LINKS.LEGAL.map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href}>{link.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        © 2026 Scriptor Digital. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacidad</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="hover:text-primary transition-colors inline-block"
        >
            {children}
        </Link>
    )
}
