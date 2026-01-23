"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
    x: number
    y: number
    translateX: number
    translateY: number
    size: number
    alpha: number
    targetAlpha: number
    dx: number
    dy: number
    magnetism: number
    vx: number
    vy: number
}

interface ParticlesProps {
    className?: string
    quantity?: number
    staticity?: number
    ease?: number
    refresh?: boolean
}

export function ParticlesBackground({
    className = "",
    quantity = 30,
    staticity = 50,
    ease = 50,
    refresh = false
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const context = useRef<CanvasRenderingContext2D | null>(null)
    const circles = useRef<Particle[]>([])
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

    const circleParams = useCallback((): Particle => {
        const x = Math.floor(Math.random() * canvasSize.current.w)
        const y = Math.floor(Math.random() * canvasSize.current.h)
        const translateX = 0
        const translateY = 0
        const size = Math.floor(Math.random() * 2) + 1
        const alpha = 0
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
        const dx = (Math.random() - 0.5) * 0.2
        const dy = (Math.random() - 0.5) * 0.2
        const magnetism = 0.1 + Math.random() * 4
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
            vx: 0,
            vy: 0
        }
    }, [])

    const drawCircle = useCallback((circle: Particle, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha } = circle
            context.current.translate(translateX, translateY)
            context.current.beginPath()
            context.current.arc(x, y, size, 0, 2 * Math.PI)
            context.current.fillStyle = `rgba(139, 92, 246, ${alpha})`
            context.current.fill()
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

            if (!update) {
                circles.current.push(circle)
            }
        }
    }, [dpr])

    const clearContext = useCallback(() => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h
            )
        }
    }, [])

    const resizeCanvas = useCallback(() => {
        if (canvasRef.current && context.current) {
            circles.current.length = 0
            canvasSize.current.w = canvasRef.current.offsetWidth
            canvasSize.current.h = canvasRef.current.offsetHeight
            canvasRef.current.width = canvasSize.current.w * dpr
            canvasRef.current.height = canvasSize.current.h * dpr
            context.current.scale(dpr, dpr)
        }
    }, [dpr])

    const drawParticles = useCallback(() => {
        resizeCanvas()
        for (let i = 0; i < quantity; i++) {
            circles.current.push(circleParams())
        }
    }, [quantity, resizeCanvas, circleParams])

    const initCanvas = useCallback(() => {
        resizeCanvas()
        drawParticles()
    }, [drawParticles, resizeCanvas])

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d")
        }
        initCanvas()

        let animationFrameId: number

        const render = () => {
            clearContext()
            circles.current.forEach((circle: Particle, i: number) => {
                // Check connections
                for (let j = i + 1; j < circles.current.length; j++) {
                    const p2 = circles.current[j]
                    const dx = circle.x - p2.x
                    const dy = circle.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const connectionDistance = 150

                    if (distance < connectionDistance) {
                        if (context.current) {
                            const opacity = 1 - distance / connectionDistance
                            context.current.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})`
                            context.current.lineWidth = 0.5
                            context.current.beginPath()
                            context.current.moveTo(circle.x, circle.y)
                            context.current.lineTo(p2.x, p2.y)
                            context.current.stroke()
                        }
                    }
                }

                // Move
                circle.x += circle.dx + (Math.random() - 0.5) * 0.1
                circle.y += circle.dy + (Math.random() - 0.5) * 0.1
                circle.translateX +=
                    (mouse.current.x / (staticity / circle.magnetism) -
                        circle.translateX) /
                    ease
                circle.translateY +=
                    (mouse.current.y / (staticity / circle.magnetism) -
                        circle.translateY) /
                    ease

                if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size) {
                    circle.dx = -circle.dx
                }
                if (circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {
                    circle.dy = -circle.dy
                }

                // Fade in
                if (circle.alpha < circle.targetAlpha) {
                    circle.alpha += 0.01
                } else if (circle.alpha > circle.targetAlpha) {
                    circle.alpha -= 0.01
                }

                drawCircle(circle, true)
            })
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        const handleResize = () => initCanvas()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [initCanvas, ease, staticity, clearContext, drawCircle])

    useEffect(() => {
        initCanvas()
    }, [refresh, initCanvas])

    return (
        <canvas
            ref={canvasRef}
            className={className}
        />
    )
}
