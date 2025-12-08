"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";


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
    const pathname = usePathname();

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
                    : cn(
                        "py-5",
                        pathname === "/"
                            ? "bg-transparent"
                            : "bg-background/95 backdrop-blur-lg shadow-lg shadow-background-dark/50 border-b border-neutral-light/20 dark:bg-transparent dark:shadow-none dark:border-none"
                    )
            )}
        >
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
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
                            <span className="font-bold text-lg leading-none text-foreground group-hover:text-accent transition-colors">
                                Super-BD
                            </span>
                            <span className="text-xs font-medium text-text-muted">
                                Consulting Engineering
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative group",
                                        isActive ? "text-accent" : "text-text-dark hover:text-accent"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    )} />
                                </Link>
                            );
                        })}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="text-accent hover:text-accent-bright transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
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
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "font-medium transition-colors py-2 border-b border-neutral-light/10",
                                            isActive ? "text-accent" : "text-text-dark hover:text-accent"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
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

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
