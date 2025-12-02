"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Laboratory", href: "/laboratory" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur-lg shadow-lg shadow-background-dark/50 py-3 border-b border-neutral-light/20"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-2 md:px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                            <img
                                src="/company-logo.png"
                                alt="Super BD Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none text-white group-hover:text-accent transition-colors">
                                Super-BD
                            </span>
                            <span className="text-xs font-medium text-text-muted">
                                Consulting Engineering
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-text-dark hover:text-accent transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-accent-hover to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 text-sm"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-accent hover:text-accent-bright transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background-dark/98 backdrop-blur-lg shadow-2xl md:hidden border-t border-neutral-light/20"
                    >
                        <div className="flex flex-col py-6 px-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-dark font-medium hover:text-accent transition-colors py-2 border-b border-neutral-light/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-neutral-light/20 my-2" />
                            <div className="flex flex-col gap-3 text-sm text-text-muted">
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-accent" />
                                    <span>+251-913-609-241</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-accent" />
                                    <span>danielhailemariam4@gmail.com</span>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="mt-4 px-6 py-3 bg-gradient-to-r from-accent-hover to-accent text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-accent/40 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
