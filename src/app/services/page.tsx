import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Our Services | Super-BD Consulting Engineering",
    description: "Explore our comprehensive range of geotechnical and material testing services.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-32 md:py-48 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-28 bg-[url('/images/services-photo.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/65" />
                {/* Gradient fade for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Comprehensive engineering solutions tailored to your project needs.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-4 text-primary">
                                        <service.icon size={28} />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base mb-4">
                                        {service.shortDescription}
                                    </CardDescription>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-accent rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full gap-2 group" asChild>
                                        <Link href={`/services/${service.slug}`}>
                                            View Details
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
