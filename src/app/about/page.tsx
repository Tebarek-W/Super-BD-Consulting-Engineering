import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
    title: "About Super-BD | Engineering Excellence & Innovation",
    description: "Learn about Super-BD Consulting, Ethiopia's premier engineering firm. Our mission, vision, and commitment to quality in infrastructure and construction projects.",
    openGraph: {
        title: "About Super-BD | Engineering Excellence & Innovation",
        description: "Learn about Super-BD Consulting, Ethiopia's premier engineering firm. Our mission, vision, and commitment to quality in infrastructure and construction projects.",
        images: ["https://www.superbd-consulting.com/images/og-about.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Super-BD | Engineering Excellence & Innovation",
        description: "Learn about Super-BD Consulting, Ethiopia's premier engineering firm. Our mission, vision, and commitment to quality in infrastructure and construction projects.",
        images: ["https://www.superbd-consulting.com/images/og-about.jpg"],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <PageHero
                title="About Us"
                description="Building the future on a foundation of precision, quality, and engineering excellence."
                image="/images/hero-building.png"
            />

            {/* Company Background */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
                            <div className="space-y-4 text-text-muted leading-relaxed">
                                <p>
                                    <strong>Super-BD Consulting Engineering</strong> is a premier Geotechnical Engineering and Materials Testing Laboratory based in Hawassa, Ethiopia. With over 13 years of experience, we have established ourselves as a trusted partner in the construction and infrastructure sectors.
                                </p>
                                <p>
                                    We specialize in soil investigation, concrete and asphalt testing, aggregate analysis, and comprehensive geotechnical investigations. Our commitment to quality is backed by our ISO-9001 certification and compliance with ASTM, AASHTO, and BS standards.
                                </p>
                                <p>
                                    From road networks and bridges to dams and high-rise buildings, our expert team delivers accurate data and actionable insights that ensure the safety and longevity of your projects.
                                </p>
                            </div>
                        </div>
                        <div className="bg-neutral border border-neutral-light/20 p-8 rounded-lg border-l-4 border-accent">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Key Strengths</h3>
                            <ul className="space-y-3">
                                {[
                                    "13+ Years of Industry Experience",
                                    "ISO-9001 Certified Quality Management",
                                    "State-of-the-art Laboratory Equipment",
                                    "Fast & Reliable Reporting",
                                    "Expertise across Civil, Road, & Dam Projects"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="text-text-muted">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Mission, Vision, Values */}
            <Section className="bg-neutral">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-neutral border border-neutral-light/20 shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent">
                                    <Target size={24} />
                                </div>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-text-muted">
                                    To provide accurate, reliable, and timely geotechnical and material testing services that empower our clients to build safe, sustainable, and cost-effective infrastructure.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <Eye size={24} />
                                </div>
                                <CardTitle>Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-text-muted">
                                    To be the leading geotechnical engineering and material testing consultancy in Ethiopia, recognized for our technical excellence, innovation, and integrity.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <Heart size={24} />
                                </div>
                                <CardTitle>Our Values</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-text-muted">
                                    <li>• <strong>Integrity:</strong> Uncompromising honesty in our data.</li>
                                    <li>• <strong>Quality:</strong> Adherence to international standards.</li>
                                    <li>• <strong>Innovation:</strong> Utilizing modern technology.</li>
                                    <li>• <strong>Safety:</strong> Prioritizing safety in all operations.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Lab Capabilities */}
            <Section>
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Laboratory Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Soil Mechanics", desc: "Triaxial tests, consolidation, shear strength.", image: "/images/soil-mechanics-bg.jpg" },
                            { title: "Concrete Technology", desc: "Compressive strength, mix design, durability.", image: "/images/concrete-technology-bg.jpg" },
                            { title: "Asphalt & Bitumen", desc: "Marshall stability, extraction, penetration.", image: "/images/asphalt-bitumen-bg.jpg" },
                            { title: "Aggregate Testing", desc: "Gradation, abrasion, impact value, specific gravity.", image: "/images/aggregate-testing-bg.jpg" },
                            { title: "Field Testing", desc: "Plate load tests, DCP, core drilling.", image: "/images/field-testing-bg.jpg" },
                            { title: "Chemical Analysis", desc: "Soil and water chemical properties.", image: "/images/chemical-analysis-bg.jpg" },
                            { title: "Rock Mechanics", desc: "Point load, unconfined compression.", image: "/images/rock-mechanics-bg.jpg" },
                            { title: "Geophysical Survey", desc: "Electrical resistivity, seismic refraction.", image: "/images/geophysical-survey-bg.jpg" }
                        ].map((item, index) => (
                            <div key={index} className="relative p-6 bg-neutral border border-neutral-light/20 rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all group overflow-hidden">
                                {(item as any).image && (
                                    <>
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${(item as any).image}')` }} />
                                        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />
                                    </>
                                )}
                                <div className="relative z-10">
                                    <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className={`text-sm ${(item as any).image ? 'text-gray-200' : 'text-text-muted'}`}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
