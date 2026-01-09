"use client"

import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data"

export function Footer() {
    return (
        <footer className="bg-[#050511] border-t border-white/5">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="font-heading text-2xl font-bold tracking-tight block">
                            Scriptor<span className="text-primary">Digital</span>
                        </Link>
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
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-foreground">Explorar</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {FOOTER_LINKS.EXPLORE.map((link) => (
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

                    <div>
                        <h4 className="font-bold mb-6 text-foreground">Newsletter</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Suscríbete para recibir las últimas novedades y recursos.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="tu@email.com"
                                className="bg-background border-input focus-visible:ring-primary"
                            />
                            <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Send className="w-4 h-4" />
                                <span className="sr-only">Suscribirse</span>
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        © 2026 Scriptor Digital. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Términos</Link>
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
