import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, SearchX } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0b] text-center px-4 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0a0a0b] to-[#0a0a0b]" />

            <div className="relative z-10 max-w-lg space-y-8">
                {/* Icon */}
                <div className="mx-auto w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse-slow">
                    <SearchX className="w-10 h-10 text-muted-foreground" />
                </div>

                {/* Typography */}
                <div className="space-y-4">
                    <h1 className="text-8xl font-heading font-medium text-white/10 tracking-widest select-none">
                        404
                    </h1>
                    <h2 className="text-2xl font-serif text-foreground">
                        Enlace perdido en los archivos.
                    </h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Parece que la página que buscas no existe o ha sido movida a otra sección de nuestra biblioteca digital.
                    </p>
                </div>

                {/* Action */}
                <div className="pt-4">
                    <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Volver al Inicio
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Footer decoration */}
            <div className="absolute bottom-8 text-[10px] text-muted-foreground/30 font-mono">
                ERROR_CODE: PAGE_NOT_FOUND // SYSTEM.REFRESH_REQUIRED
            </div>
        </div>
    )
}
