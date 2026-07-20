"use client"

import { toast } from "sonner"

interface ComingSoonLinkProps {
    label: string
    children: React.ReactNode
}

export function ComingSoonLink({ label, children }: ComingSoonLinkProps) {
    return (
        <button
            type="button"
            onClick={() => toast.info(`${label}: disponible próximamente`, {
                description: "Estamos preparando este canal. Mientras tanto, podés contactarnos por correo o WhatsApp.",
            })}
            className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label={`${label}, disponible próximamente`}
            title={`${label} — disponible próximamente`}
        >
            {children}
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full border border-background bg-amber-400" aria-hidden="true" />
        </button>
    )
}
