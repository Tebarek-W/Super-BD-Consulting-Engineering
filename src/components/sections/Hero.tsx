"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/hero-bridge.png",
    "/images/hero-building.png",
    "/images/hero-dam.png",
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
            {/* Cinematic Background Image Carousel */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            scale: { duration: 20, ease: "linear" }
                        }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${heroImages[currentImageIndex]}')`,
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background/30 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />

            <Container className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white"
                    >
                        Engineering <span className="text-accent">Excellence</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Precision geotechnical investigations, advanced material testing,
                        and comprehensive engineering consultancy for Ethiopia's infrastructure future.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            variant="primary"
                            className="bg-accent hover:bg-accent-bright text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-accent/30"
                            asChild
                        >
                            <Link href="/services">Explore Our Services</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-accent text-accent hover:bg-accent hover:text-background font-semibold px-8 py-4 text-lg"
                            asChild
                        >
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </motion.div>

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">500+</div>
                            <div className="text-sm text-text-muted uppercase tracking-wide">Projects Completed</div>
                        </div>
                        <div className="text-center border-x border-neutral-light">
                            <div className="text-4xl font-bold text-accent mb-2">15+</div>
                            <div className="text-sm text-text-muted uppercase tracking-wide">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">100%</div>
                            <div className="text-sm text-text-muted uppercase tracking-wide">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
