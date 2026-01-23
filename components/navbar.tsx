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
                        className="fixed inset-0 bg-background/98 z-40 flex flex-col items-center justify-center"
                    >
                        {/* Mobile Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                        <nav className="flex flex-col items-center gap-8 relative z-10">
                            {NAV_LINKS.map((item, i) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-2xl font-serif text-foreground/80 hover:text-primary transition-colors tracking-wide"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 left-0 w-full flex justify-center"
                        >
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">Scriptor Digital © 2024</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
