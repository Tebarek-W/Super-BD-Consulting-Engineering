import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectTable from "@/components/ui/ProjectTable";

export const metadata = {
    title: "Our Projects | Super-BD Consulting Engineering",
    description: "A showcase of our successful projects in roads, buildings, dams, and irrigation.",
};

const roadProjects = [
    { name: "Sidama Region Rural Roads", client: "Sidama Roads Authority", location: "Sidama", service: "Geotechnical Investigation" },
    { name: "Hawassa City Asphalt Road", client: "Hawassa City Admin", location: "Hawassa", service: "Material Quality Control" },
    { name: "Dilla - Yirgacheffe Road", client: "ERA", location: "Gedeo Zone", service: "Pavement Design" },
    { name: "Wondo Genet Access Road", client: "Regional Gov", location: "Wondo Genet", service: "Soil Investigation" },
];

const buildingProjects = [
    { name: "Hawassa Industrial Park", client: "IPDC", location: "Hawassa", service: "Foundation Investigation" },
    { name: "Sidama Bank HQ", client: "Sidama Bank", location: "Hawassa", service: "Soil Mechanics" },
    { name: "Hawassa University Expansion", client: "Hawassa University", location: "Hawassa", service: "Concrete Testing" },
    { name: "Yirgalem Hospital Wing", client: "Ministry of Health", location: "Yirgalem", service: "Geotechnical Survey" },
];

const waterProjects = [
    { name: "Gidabo Dam", client: "Ministry of Water", location: "SNNPR", service: "Material Testing" },
    { name: "Logita Irrigation Project", client: "Regional Water Bureau", location: "Sidama", service: "Soil & Rock Testing" },
    { name: "Hawassa Water Supply", client: "Water Utility", location: "Hawassa", service: "Water Quality Analysis" },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-32 md:py-48 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-28 bg-[url('/images/hero-bridge.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/40" />
                {/* Gradient fade for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Delivering excellence across diverse sectors, from transport infrastructure to major building works.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <ProjectTable title="Roads & Bridges" projects={roadProjects} />
                    <ProjectTable title="Buildings & Structures" projects={buildingProjects} />
                    <ProjectTable title="Dams & Irrigation" projects={waterProjects} />
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
