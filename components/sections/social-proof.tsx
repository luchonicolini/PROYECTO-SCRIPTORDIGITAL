import { BookOpenCheck, Landmark, ShieldCheck, GraduationCap, LockKeyhole } from "lucide-react"

export function SocialProof() {
    return (
        <section className="py-10 border-y border-border bg-muted/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500 mb-8 uppercase">
                    Potenciado por estándares de clase mundial
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

                    {/* 1. Métricas de Éxito */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="h-7 w-7" />
                        <span className="font-serif text-xl font-medium">+50 Tesis Aprobadas</span>
                    </div>

                    {/* 2. Privacidad (Reemplazando un poco de lo perdido en TrustStrip) */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <LockKeyhole className="h-6 w-6" />
                        <span className="font-serif text-lg">100% Confidencial</span>
                    </div>

                    {/* 3. Normas APA (Icon + Text) */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpenCheck className="h-6 w-6" />
                        <span className="font-serif text-lg">Normas APA</span>
                    </div>

                    {/* 4. CONEAU (Icon + Text) */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Landmark className="h-6 w-6" />
                        <span className="font-serif text-lg">CONEAU</span>
                    </div>

                    {/* 5. SSL / Security */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <ShieldCheck className="h-6 w-6" />
                        <span className="font-sans text-sm font-semibold tracking-wider">SSL SECURE</span>
                    </div>

                </div>
            </div>
        </section>
    )
}
