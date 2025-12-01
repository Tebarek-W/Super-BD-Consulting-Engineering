import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Sidama Region Road Network",
        category: "Roads & Bridges",
        location: "Sidama, Ethiopia",
        description: "Comprehensive geotechnical investigation and material quality control for 120km of rural roads.",
    },
    {
        title: "Hawassa Industrial Park Expansion",
        category: "Buildings",
        location: "Hawassa, Ethiopia",
        description: "Soil investigation and foundation recommendation for new industrial sheds and warehouses.",
    },
    {
        title: "Gidabo Dam Irrigation Project",
        category: "Dams & Irrigation",
        location: "SNNPR, Ethiopia",
        description: "Material testing for concrete structures and canal lining quality assurance.",
    },
];

export default function FeaturedProjects() {
    return (
        <Section className="bg-neutral">
            <Container>
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
                        <p className="text-text-muted max-w-2xl">
                            A glimpse into our portfolio of successful collaborations across various sectors.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 border-accent text-accent hover:bg-accent hover:text-background" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-neutral border border-neutral-light/20 rounded-lg overflow-hidden hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group">
                            <div className="h-48 bg-gradient-to-br from-background-dark to-background relative overflow-hidden">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                                <div className="absolute bottom-4 left-4 bg-accent text-background px-3 py-1 rounded text-xs font-bold">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-text-muted mb-4 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {project.location}
                                </p>
                                <p className="text-text-muted text-sm line-clamp-3">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-background" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
