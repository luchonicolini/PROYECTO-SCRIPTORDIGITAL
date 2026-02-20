import { BookOpenCheck, Landmark, ShieldCheck, GraduationCap, LockKeyhole } from "lucide-react"

export function SocialProof() {
    return (
        <section className="py-10 border-y border-border bg-muted/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500 mb-8 uppercase">
                    Potenciado por estándares de clase mundial
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">

                    {/* Badge 1: Métricas de Éxito */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-300">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span className="font-serif text-sm md:text-base font-medium text-foreground/90 tracking-wide">+50 Tesis Aprobadas</span>
                    </div>

                    {/* Badge 2: Privacidad */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-300">
                        <LockKeyhole className="h-5 w-5 text-primary" />
                        <span className="font-serif text-sm md:text-base font-medium text-foreground/90 tracking-wide">100% Confidencial</span>
                    </div>

                    {/* Badge 3: Normas APA */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-300">
                        <BookOpenCheck className="h-5 w-5 text-primary" />
                        <span className="font-serif text-sm md:text-base font-medium text-foreground/90 tracking-wide">Normas APA</span>
                    </div>

                    {/* Badge 4: CONEAU */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-300">
                        <Landmark className="h-5 w-5 text-primary" />
                        <span className="font-serif text-sm md:text-base font-medium text-foreground/90 tracking-wide">Aval CONEAU</span>
                    </div>

                    {/* Badge 5: SSL / Security */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-300">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-foreground/90 uppercase">SSL Secure</span>
                    </div>

                </div>
            </div>
        </section>
    )
}
