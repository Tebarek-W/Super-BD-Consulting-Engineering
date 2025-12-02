import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamMarquee from "@/components/sections/TeamMarquee";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
    title: "Our Team | Super-BD Consulting Engineering",
    description: "Meet the experts behind Super-BD Consulting Engineering.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <PageHero
                title="Our Team"
                description="Led by industry experts committed to engineering excellence and innovation."
                image="/images/team-hero-photo.jpg"
                imagePosition="center 25%"
                topOffset={true}
                customHeight="h-[85vh] min-h-[700px]"
            />

            <Section className="bg-background-dark overflow-hidden">
                <Container>
                    <TeamMarquee />
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
