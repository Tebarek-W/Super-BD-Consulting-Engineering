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
    const heightClass = customHeight || "h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] min-h-[550px] sm:min-h-[600px] md:min-h-[650px]";

    return (
        <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-background`}>
            {/* Background Image - Full coverage with smooth scaling */}
            <div
                className={`absolute inset-x-0 bottom-0 bg-cover bg-no-repeat ${topOffset ? 'top-20 sm:top-24 md:top-28' : 'top-0'}`}
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: imagePosition,
                }}
            />

            {/* Overlay - Gradient for image clarity with text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/25 to-background/60 dark:from-background-dark/40 dark:via-background-dark/30 dark:to-background-dark/70" />

            {/* Bottom Gradient Fade - Taller for smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

            {/* Content Container with generous padding */}
            <Container className="relative z-10 text-center px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight drop-shadow-md"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                        className="text-lg sm:text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}
