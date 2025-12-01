import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamMarquee from "@/components/sections/TeamMarquee";

export const metadata = {
    title: "Our Team | Super-BD Consulting Engineering",
    description: "Meet the experts behind Super-BD Consulting Engineering.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-32 md:py-48 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-28 bg-[url('/images/team-photo.jpg')] bg-cover bg-[center_top_-20px]" />
                <div className="absolute inset-0 bg-black/65" />
                {/* Gradient fade for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background-dark" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
                    <p className="text-xl text-text-muted max-w-2xl">
                        Led by industry experts committed to engineering excellence and innovation.
                    </p>
                </Container>
            </section>

            <Section className="bg-background-dark overflow-hidden">
                <Container>
                    <TeamMarquee />
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
