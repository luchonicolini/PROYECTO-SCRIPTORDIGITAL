import { BookOpenCheck, Landmark, ShieldCheck } from "lucide-react"

export function SocialProof() {
    return (
        <section className="py-10 border-y border-border bg-muted/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500 mb-8 uppercase">
                    Potenciado por estándares de clase mundial
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

                    {/* 1. Next.js Logo (Custom SVG) */}
                    <div className="h-8 w-auto text-foreground flex items-center gap-2">
                        <svg viewBox="0 0 180 180" fill="none" className="h-8 w-8">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                                <circle cx="90" cy="90" r="90" fill="black" />
                            </mask>
                            <g mask="url(#mask0)">
                                <circle cx="90" cy="90" r="90" fill="currentColor" stroke="currentColor" strokeWidth="6" />
                                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                                <rect x="115" y="54" width="12" height="72" fill="white" />
                            </g>
                        </svg>
                        <span className="font-bold text-lg hidden md:block">Next.js</span>
                    </div>

                    {/* 2. Vercel Logo (Custom SVG) */}
                    <div className="h-6 w-auto text-foreground flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path d="M12 1L24 22H0L12 1Z" />
                        </svg>
                        <span className="font-bold text-lg hidden md:block tracking-tighter">VERCEL</span>
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
