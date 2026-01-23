import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={cn("group relative z-10 flex items-center gap-3", className)}>
            {/* Icon Container */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <span className="font-heading italic font-black text-2xl text-primary">S</span>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center">
                <span className="font-heading text-xl font-bold tracking-tight text-foreground leading-none group-hover:text-foreground/90 transition-colors">
                    SCRIPTOR
                </span>
                <span className="font-sans text-[0.6rem] font-bold tracking-[0.35em] text-primary leading-none uppercase mt-1 group-hover:text-primary/80 transition-colors">
                    DIGITAL
                </span>
            </div>
        </Link>
    )
}
