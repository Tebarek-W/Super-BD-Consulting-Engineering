import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CheckCircle, Building2, Factory, Landmark, Plane } from "lucide-react";

const industries = [
    { name: "Road & Transport", icon: Plane },
    { name: "Construction", icon: Building2 },
    { name: "Dams & Irrigation", icon: Factory },
    { name: "Bridges", icon: Landmark },
];

export default function CertificationsIndustries() {
    return (
        <Section className="bg-background-dark">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Certifications */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">Certified Excellence</h2>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            We adhere to the highest international standards to ensure accuracy and reliability in every test we conduct. Our laboratory is equipped with state-of-the-art technology and staffed by certified professionals.
                        </p>

                        <div className="space-y-4">
                            {[
                                "ISO-9001 Certified Quality Management",
                                "ASTM / AASHTO / BS Compliant Testing",
                                "Licensed by Ministry of Construction",
                                "ERA Certified for Road Construction Material QC"
                            ].map((cert, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-accent shrink-0" size={20} />
                                    <span className="font-medium text-text-muted">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="bg-neutral border border-neutral-light/20 p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-accent/10 hover:border-accent transition-all duration-300 group">
                                    <industry.icon size={32} className="mb-3 text-accent transition-colors" />
                                    <span className="font-bold text-foreground group-hover:text-accent transition-colors">{industry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
