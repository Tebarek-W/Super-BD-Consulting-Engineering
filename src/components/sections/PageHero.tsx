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

            {/* Dark Gradient Overlay for readability - matching home page style */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background/30 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />

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
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground dark:text-white drop-shadow-lg"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl text-text-muted dark:text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}
