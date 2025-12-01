import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-10" />
                <Container className="relative z-10">
                    <Link href="/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} /> Back to Services
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary">
                            <service.icon size={24} />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        {service.shortDescription}
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-6 text-primary">Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {service.fullDescription}
                            </p>

                            <h3 className="text-xl font-bold mb-4 text-primary">Key Features & Tests</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-neutral rounded-lg">
                                        <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-neutral p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-bold mb-4 text-primary">Need this service?</h3>
                                <p className="text-gray-600 mb-6 text-sm">
                                    Contact us today to discuss your project requirements and get a quote.
                                </p>
                                <Button className="w-full" asChild>
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                            </div>

                            <div className="bg-primary text-white p-6 rounded-lg">
                                <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        ISO-9001 Certified
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        Fast Turnaround Time
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        Expert Analysis
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
