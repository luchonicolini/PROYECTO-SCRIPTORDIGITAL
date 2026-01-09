"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
}

export function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        // Configuration
        const particleCount = 60
        const connectionDistance = 150
        const moveSpeed = 0.5

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        // Initialize particles
        const initParticles = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * moveSpeed,
                    vy: (Math.random() - 0.5) * moveSpeed,
                    size: Math.random() * 2 + 1,
                })
            }
        }

        // Draw loop
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections first
            ctx.lineWidth = 0.5
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i]

                // Move particle
                p1.x += p1.vx
                p1.y += p1.vy

                // Bounce off edges
                if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1
                if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1

                // Connect to others
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        const opacity = 1 - distance / connectionDistance
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})` // Violet
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            // Draw particles on top
            for (const p of particles) {
                ctx.fillStyle = "rgba(167, 139, 250, 0.5)" // Light violet
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        // Start
        resize()
        draw()

        window.addEventListener("resize", resize)

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    )
}
