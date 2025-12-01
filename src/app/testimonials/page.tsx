import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Quote } from "lucide-react";

export const metadata = {
    title: "Testimonials | Super-BD Consulting Engineering",
    description: "See what our clients say about our geotechnical and material testing services.",
};

const testimonials = [
    {
        name: "Abebe Kebede",
        role: "Project Manager",
        company: "Sidama Roads Authority",
        quote: "Super-BD provided exceptional service during our rural road expansion project. Their soil investigation reports were detailed, accurate, and delivered on time.",
    },
    {
        name: "Sarah Johnson",
        role: "Lead Architect",
        company: "Global Construction Ltd.",
        quote: "We rely on Super-BD for all our concrete testing needs in the Hawassa region. Their professionalism and attention to detail are unmatched.",
    },
    {
        name: "Dawit Tadesse",
        role: "Site Engineer",
        company: "Oromia Water Works",
        quote: "The team at Super-BD is highly knowledgeable. Their geotechnical recommendations saved us significant time and resources on the Gidabo Dam project.",
    },
    {
        name: "Mulugeta Assefa",
        role: "CEO",
        company: "Sunrise Real Estate",
        quote: "Fast, reliable, and certified. We wouldn't trust anyone else with our material testing. Highly recommended!",
    }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center opacity-10" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-neutral border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <Quote size={40} className="text-accent/50 mb-2" />
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <h3 className="font-bold text-primary">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
