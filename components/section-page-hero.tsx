import { ArrowDown } from "lucide-react"

interface SectionPageHeroProps {
    eyebrow: string
    title: string
    highlight: string
    description: string
    targetId?: string
}

export function SectionPageHero({ eyebrow, title, highlight, description, targetId = "contenido" }: SectionPageHeroProps) {
    return (
        <header className="relative overflow-hidden border-b border-border bg-background px-4 pb-20 pt-36 md:pb-24 md:pt-44">
            <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="container relative z-10 mx-auto max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
                <h1 className="mt-6 max-w-4xl font-heading text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
                    {title} <span className="italic text-muted-foreground">{highlight}</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">{description}</p>
                <a href={`#${targetId}`} className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Ver información
                    <ArrowDown className="h-4 w-4" />
                </a>
            </div>
        </header>
    )
}
