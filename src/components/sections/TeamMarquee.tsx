"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail, BookOpen, Award, Briefcase } from "lucide-react";
import { teamMembers } from "@/data/team";

// Sort members: CEO -> Manager -> Others
const SORTED_MEMBERS = [...teamMembers].sort((a, b) => {
    const roleOrder = { ceo: 0, manager: 1, member: 2 };
    return (roleOrder[a.role as keyof typeof roleOrder] ?? 2) - (roleOrder[b.role as keyof typeof roleOrder] ?? 2);
});

export default function TeamMarquee() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full py-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

            <div className="relative z-10 flex flex-col gap-8">
                <div className="text-center mb-8 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Experts</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        A dedicated team of professionals committed to engineering excellence.
                    </p>
                </div>

                {/* Marquee Container */}
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Inner Track - Duplicated for seamless loop */}
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40, // Adjust speed here (higher = slower)
                                ease: "linear",
                            },
                        }}
                        style={{
                            width: "fit-content",
                            animationPlayState: isHovered ? "paused" : "running", // CSS fallback if framer motion pause is tricky
                        }}
                    >
                        {/* Render list twice for infinite loop effect */}
                        {[...SORTED_MEMBERS, ...SORTED_MEMBERS].map((member, index) => (
                            <div
                                key={index}
                                className="relative w-[350px] flex-shrink-0 group"
                            >
                                <div className="h-full bg-neutral/50 backdrop-blur-sm border border-neutral-light/20 rounded-2xl p-8 hover:bg-neutral hover:border-accent/50 transition-all duration-300 flex flex-col items-center text-center">
                                    {/* Profile Photo */}
                                    <div className="mb-6 relative">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-blue-600/20 flex items-center justify-center text-accent border-2 border-accent/30 group-hover:border-accent group-hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg shadow-black/20 group-hover:shadow-accent/20">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover brightness-110"
                                                    style={{ objectPosition: (member as any).imagePosition || "center" }}
                                                />
                                            ) : (
                                                <Users size={48} />
                                            )}
                                        </div>
                                        {/* Decorative ring */}
                                        <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-125 transition-transform duration-500" />
                                    </div>

                                    {/* Name & Title */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-accent-bright text-sm font-medium">{member.title}</p>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                        {member.bio}
                                    </p>

                                    {/* Footer / Contact */}
                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-center gap-4 w-full">
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors"
                                            >
                                                <Mail size={14} />
                                                Email
                                            </a>
                                        )}
                                        {member.degree && (
                                            <span className="text-xs bg-white/5 px-2 py-1 rounded text-text-muted">{member.degree}</span>
                                        )}
                                    </div>

                                    {/* Hover Gradient Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                                </div>
                            </div>
                        ))
                        }
                    </motion.div >
                </div >
            </div >
        </div >
    );
}
