"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="w-10 h-10 rounded-lg bg-neutral/50 flex items-center justify-center"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-lg bg-neutral hover:bg-neutral-light transition-all duration-300 flex items-center justify-center group overflow-hidden border border-neutral-light/20"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {/* Sun Icon for Light Mode */}
            <Sun
                className={`absolute transition-all duration-500 ${theme === "dark"
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    } text-amber-500 group-hover:text-amber-400`}
                size={20}
            />

            {/* Moon Icon for Dark Mode */}
            <Moon
                className={`absolute transition-all duration-500 ${theme === "dark"
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                    } text-accent group-hover:text-accent-bright`}
                size={20}
            />
        </button>
    );
}
