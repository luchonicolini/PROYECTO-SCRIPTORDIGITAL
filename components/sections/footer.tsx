import Link from "next/link"

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data"

import { Logo } from "@/components/logo"
import { ComingSoonLink } from "@/components/coming-soon-link"

export function Footer() {
    return (
        <footer className="relative bg-background border-t border-border overflow-hidden text-foreground">
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="block mb-6">
                            <Logo />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Orientación académica y soluciones digitales para profesionales e instituciones que necesitan avanzar con claridad.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <ComingSoonLink
                                    key={social.label}
                                    label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </ComingSoonLink>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-foreground">Explorar</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {FOOTER_LINKS.EXPLORE.filter(link => link.label !== "Blog").map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href}>{link.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-foreground">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {FOOTER_LINKS.LEGAL.map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href}>{link.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Scriptor Digital. Todos los derechos reservados.
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
