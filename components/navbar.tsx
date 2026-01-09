"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import { NAV_LINKS } from "@/lib/data"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-[background-color,backdrop-filter,shadow,padding] duration-500 ease-in-out border-b border-white/5 ${isScrolled ? "bg-[#050511]/90 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO + BADGE */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="group relative z-10 flex items-center gap-2">
                        <span className="font-heading text-xl font-bold tracking-tighter text-white group-hover:text-white/90 transition-colors uppercase">
                            ScriptorDigital
                        </span>
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION (Right Aligned) */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Search Icon */}
                    <button className="text-white/70 hover:text-white transition-colors p-2">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* MOBILE MENU TOGGLE (Visible on mobile) */}
                <button className="md:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Mobile Links */}
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-light text-white tracking-widest hover:text-cyan-400 transition-colors"
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
