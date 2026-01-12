"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        let rafId: number

        function raf(time: number) {
            lenisRef.current?.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        // Handle anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest('a')

            if (anchor && anchor.href && anchor.href.includes('#')) {
                const href = anchor.href
                const targetId = href.split('#')[1]
                const targetElem = document.getElementById(targetId)

                if (targetElem) {
                    e.preventDefault()
                    lenisRef.current?.scrollTo(targetElem, {
                        offset: -100, // Adjust for fixed header
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    })
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)

        return () => {
            cancelAnimationFrame(rafId)
            lenisRef.current?.destroy()
            document.removeEventListener('click', handleAnchorClick)
        }
    }, [])

    return (
        <div className="w-full min-h-screen">
            {children}
        </div>
    )
}
