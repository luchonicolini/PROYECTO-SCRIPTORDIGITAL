import type { Metadata } from "next"
import { Mail, MessageCircle, Clock3, ArrowRight } from "lucide-react"
import { SectionPageHero } from "@/components/section-page-hero"
import { ContactModal } from "@/components/contact-modal"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
    title: "Contacto",
    description: "Contanos sobre tu proyecto académico o tecnológico y coordinemos una primera conversación sin cargo.",
    alternates: { canonical: "/contacto" },
}

const contactOptions = [
    {
        icon: Mail,
        label: "Correo",
        value: "scriptordigitaloficial@gmail.com",
        href: "mailto:scriptordigitaloficial@gmail.com",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+54 9 11 3420 6516",
        href: "https://wa.me/5491134206516",
    },
]

export default function ContactPage() {
    return (
        <main>
            <SectionPageHero
                eyebrow="Contacto"
                title="Conversemos sobre"
                highlight="tu próximo paso."
                description="Contanos en qué etapa estás. La primera conversación nos permite entender la necesidad y confirmar si podemos ayudarte."
            />

            <section id="contenido" className="bg-background py-20 md:py-28">
                <div className="container mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Primera consulta</p>
                        <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground">Empecemos por entender el proyecto</h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Completá un formulario breve con el área, la etapa y el plazo. Te vamos a responder con preguntas concretas o una propuesta para coordinar una reunión.
                        </p>
                        <div className="mt-7 flex items-center gap-3 rounded-xl bg-muted/40 p-4 text-sm text-muted-foreground">
                            <Clock3 className="h-5 w-5 shrink-0 text-primary" />
                            Respondemos dentro de 24 horas hábiles.
                        </div>
                        <ContactModal>
                            <Button size="lg" className="mt-8 h-13 rounded-full px-7 font-bold">
                                Contarles sobre mi proyecto
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </ContactModal>
                    </div>

                    <aside className="space-y-4">
                        {contactOptions.map((option) => (
                            <a key={option.label} href={option.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-muted/20 p-6 transition-colors hover:border-primary/30 hover:bg-muted/40">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><option.icon className="h-5 w-5" /></span>
                                <span>
                                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{option.label}</span>
                                    <span className="mt-1 block break-all font-medium text-foreground">{option.value}</span>
                                </span>
                            </a>
                        ))}
                        <div className="rounded-2xl border border-border bg-foreground p-6 text-background">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-background/75">Modalidad</p>
                            <p className="mt-2 font-heading text-xl font-semibold">Atención remota</p>
                            <p className="mt-2 text-sm leading-relaxed text-background/80">Trabajamos con profesionales e instituciones de Argentina y otros países.</p>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />
        </main>
    )
}
