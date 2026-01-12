"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
                isScrolled
                    ? "bg-[#050511]/80 backdrop-blur-xl py-4 border-white/5 shadow-2xl"
                    : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="group relative z-10 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 transition-colors duration-500">
                        <span className="font-serif italic text-white font-bold text-sm">S</span>
                    </div>
                    <span className="font-heading text-lg font-medium tracking-tight text-white group-hover:text-white/90 transition-colors uppercase">
                        Scriptor<span className="text-white/40">Digital</span>
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-white/70 hover:text-white z-50 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 top-0 bg-[#050511]/95 z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-serif italic text-white/80 hover:text-violet-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

