"use client";

import { motion } from "framer-motion";

interface Project {
    name: string;
    client: string;
    location: string;
    service: string;
}

interface ProjectTableProps {
    title: string;
    projects: Project[];
}

export default function ProjectTable({ title, projects }: ProjectTableProps) {
    return (
        <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground border-l-4 border-accent pl-4">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-neutral border border-neutral-light/20 rounded-lg p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                        {/* Project Name */}
                        <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            {project.name}
                        </h4>

                        {/* Project Details */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-accent font-semibold min-w-[70px]">Client:</span>
                                <span className="text-text-muted">{project.client}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-accent font-semibold min-w-[70px]">Location:</span>
                                <span className="text-text-muted">{project.location}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-accent font-semibold min-w-[70px]">Service:</span>
                                <span className="text-text-muted">{project.service}</span>
                            </div>
                        </div>

                        {/* Accent Bar */}
                        <div className="mt-4 pt-4 border-t border-neutral-light/10">
                            <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent-bright rounded-full group-hover:w-full transition-all duration-500" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
