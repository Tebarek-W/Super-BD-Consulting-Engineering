import { notFound } from "next/navigation";
import { getExpertiseBySlug, getAllExpertiseSlugs } from "@/data/expertise";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    const slugs = getAllExpertiseSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const expertise = getExpertiseBySlug(slug);

    if (!expertise) {
        return {
            title: "Expertise Not Found | Super-BD Consulting",
        };
    }

    return {
        title: `${expertise.title} | Super-BD Consulting Engineering`,
        description: expertise.fullDescription,
        openGraph: {
            title: `${expertise.title} | Super-BD Consulting`,
            description: expertise.fullDescription,
            images: [expertise.heroImage],
        },
    };
}

export default async function ExpertiseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const expertise = getExpertiseBySlug(slug);

    if (!expertise) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <PageHero
                title={expertise.title}
                description={expertise.shortDescription}
                image={expertise.heroImage}
            />

            {/* Overview Section */}
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Overview</h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            {expertise.fullDescription}
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Features Section */}
            <Section className="bg-neutral">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                            Key Features & Capabilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {expertise.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-background rounded-xl border border-neutral-light/20 hover:border-accent/50 transition-all duration-300 group"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <CheckCircle2 size={16} className="text-accent" />
                                    </div>
                                    <p className="text-foreground leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Process Section */}
            {expertise.process.length > 0 && (
                <Section>
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                                Our Process
                            </h2>
                            <div className="space-y-6">
                                {expertise.process.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <p className="text-lg text-foreground leading-relaxed">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* Photo Gallery */}
            <Section className="bg-neutral">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                            Our Work
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {expertise.gallery.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                                >
                                    <img
                                        src={image}
                                        alt={`${expertise.title} ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section>
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-text-muted mb-8 leading-relaxed">
                            Contact us today to discuss your {expertise.title.toLowerCase()} needs. Our expert team is ready to provide reliable, accurate solutions for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-accent hover:bg-accent-bright text-white"
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-accent text-accent hover:bg-accent hover:text-white"
                                asChild
                            >
                                <Link href="/">Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
