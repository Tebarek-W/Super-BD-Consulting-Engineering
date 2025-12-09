import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Clock, Award, Users, Zap } from "lucide-react";

const reasons = [
    {
        title: "13+ Years Experience",
        description: "Over a decade of proven expertise in geotechnical engineering and material testing.",
        icon: Award,
    },
    {
        title: "Fast Reporting",
        description: "We understand project timelines. Our streamlined processes ensure quick turnaround times.",
        icon: Clock,
    },
    {
        title: "Expert Team",
        description: "Led by industry veterans with extensive academic and practical background.",
        icon: Users,
    },
    {
        title: "Advanced Equipment",
        description: "Our lab is equipped with modern, calibrated machinery for precise results.",
        icon: Zap,
    },
];

export default function WhyChooseUs() {
    return (
        <Section className="why-choose-section bg-primary text-foreground">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="why-choose-title text-3xl md:text-4xl font-bold mb-4">Why Choose Super-BD?</h2>
                    <p className="why-choose-description text-text-muted">
                        We combine technical expertise with a commitment to quality, ensuring your project rests on solid ground.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="why-choose-card text-center p-6 rounded-lg bg-neutral/50 hover:bg-neutral border border-neutral-light/20 hover:border-accent transition-all">
                            <div className="why-choose-icon-wrapper w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                                <reason.icon size={32} />
                            </div>
                            <h3 className="why-choose-title text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="why-choose-description text-text-muted text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
