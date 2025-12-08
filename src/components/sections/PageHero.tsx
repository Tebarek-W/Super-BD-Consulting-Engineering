"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    description: string;
    image: string;
    imagePosition?: string;
    topOffset?: boolean;
    customHeight?: string;
}

export default function PageHero({ title, description, image, imagePosition = "center", topOffset = true, customHeight }: PageHeroProps) {
    const heightClass = customHeight || "h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[500px] sm:min-h-[600px]";

    return (
        <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-background`}>
            {/* Background Image */}
            <div
                className={`absolute inset-x-0 bottom-0 bg-cover ${topOffset ? 'top-28' : 'top-0'}`}
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: imagePosition,
                }}
            />

            {/* Dark Gradient Overlay for readability - lightened for brighter images */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background/20 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />

            {/* Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white dark:text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl font-medium text-gray-50 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                        style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}
