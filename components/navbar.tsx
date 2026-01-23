"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass-panel py-4" : "bg-transparent border-b border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO */}
                <Logo />

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className={cn(
                                "text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 relative group",
                                isScrolled ? "text-muted-foreground hover:text-primary" : "text-foreground hover:text-foreground/70"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className={cn(
                        "md:hidden z-50 transition-colors",
                        isScrolled ? "text-foreground/70 hover:text-foreground" : "text-foreground hover:text-foreground/70"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
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
                        className="fixed inset-0 top-0 bg-background/95 z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {NAV_LINKS.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-3xl font-serif italic text-foreground/80 hover:text-primary transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
