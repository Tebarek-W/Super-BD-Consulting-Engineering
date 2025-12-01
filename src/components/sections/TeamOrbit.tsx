"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail, BookOpen, Award, Briefcase, Linkedin } from "lucide-react";
import { teamMembers } from "@/data/team";

const CENTER_MEMBERS = teamMembers.filter(m => m.role === "ceo" || m.role === "manager");
const ORBIT_MEMBERS = teamMembers.filter(m => m.role !== "ceo" && m.role !== "manager");

export default function TeamOrbit() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden py-20">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

            {/* Mobile View (Stack) */}
            <div className="md:hidden flex flex-col gap-8 px-4 w-full max-w-md mx-auto relative z-10">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral/50 backdrop-blur-sm border border-neutral-light/20 p-6 rounded-2xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-accent text-sm">{member.title}</p>
                            </div>
                        </div>
                        <p className="text-text-muted text-sm line-clamp-3">{member.bio}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop View (Orbit) */}
            <div className="hidden md:flex relative w-[800px] h-[800px] items-center justify-center">

                {/* Orbit Path */}
                <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-accent/20" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-accent/10" />

                {/* Center Nodes (Fixed) */}
                <div className="absolute z-20 flex flex-col gap-4 items-center">
                    {CENTER_MEMBERS.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="w-48 bg-neutral/80 backdrop-blur-md border border-accent/30 p-6 rounded-2xl text-center shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white shadow-lg">
                                    <Users size={40} />
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight">{member.name}</h3>
                                <p className="text-accent text-xs mt-1 font-medium">{member.title}</p>

                                {/* Hover Details */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-background-dark border border-neutral-light p-4 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50 shadow-2xl">
                                    <p className="text-xs text-text-muted mb-2">{member.bio}</p>
                                    <div className="flex justify-center gap-2">
                                        {member.email && <Mail size={14} className="text-accent" />}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Orbiting Ring */}
                <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ pointerEvents: isHovered ? "none" : "auto" }} // Optional: pause on hover logic could be added here
                >
                    {ORBIT_MEMBERS.map((member, index) => {
                        const angle = (index / ORBIT_MEMBERS.length) * 360;
                        const radius = 300; // Distance from center

                        return (
                            <div
                                key={index}
                                className="absolute top-1/2 left-1/2 w-0 h-0"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px)`,
                                }}
                            >
                                {/* Counter-rotate to keep upright */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 60,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="w-64 -translate-x-1/2 -translate-y-1/2"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div className="bg-neutral/80 backdrop-blur-sm border border-neutral-light/20 p-5 rounded-xl hover:bg-neutral hover:border-accent/50 transition-all duration-300 group cursor-pointer">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                <Users size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm">{member.name}</h4>
                                                <p className="text-text-muted text-xs">{member.title}</p>
                                            </div>
                                        </div>
                                        <p className="text-text-muted text-xs line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            {member.bio}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
