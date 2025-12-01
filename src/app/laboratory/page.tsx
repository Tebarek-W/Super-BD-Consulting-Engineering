import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Microscope, Zap, Scale, Hammer } from "lucide-react";

export const metadata = {
    title: "Laboratory & Equipment | Super-BD Consulting Engineering",
    description: "Explore our state-of-the-art laboratory equipment and testing capabilities.",
};

const equipment = [
    {
        category: "Soil Mechanics",
        items: [
            { name: "Triaxial Testing Machine", desc: "For determining shear strength parameters of soil." },
            { name: "Consolidation Apparatus", desc: "Measures soil compression and settlement characteristics." },
            { name: "Direct Shear Apparatus", desc: "Tests shear strength of soils under various loads." },
            { name: "CBR Testing Machine", desc: "California Bearing Ratio test for pavement design." },
        ],
        icon: Microscope,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        category: "Concrete & Cement",
        items: [
            { name: "Compression Testing Machine", desc: "2000kN capacity for concrete cube and cylinder testing." },
            { name: "Flexural Testing Machine", desc: "For determining tensile strength of concrete beams." },
            { name: "Vicats Apparatus", desc: "Determines setting time and consistency of cement." },
            { name: "Slump Cone", desc: "Measures workability of fresh concrete." },
        ],
        icon: Hammer,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        category: "Asphalt & Aggregates",
        items: [
            { name: "Marshall Stability Tester", desc: "Measures stability and flow of asphalt mixes." },
            { name: "Centrifuge Extractor", desc: "Determines bitumen content in asphalt mixtures." },
            { name: "Los Angeles Abrasion Machine", desc: "Tests aggregate resistance to fragmentation." },
            { name: "Sieve Shaker", desc: "Automated gradation analysis of aggregates." },
        ],
        icon: Scale,
        gradient: "from-orange-500 to-red-500"
    },
    {
        category: "Field Equipment",
        items: [
            { name: "Core Drilling Machine", desc: "Extracts concrete or rock cores for analysis." },
            { name: "Plate Load Test Kit", desc: "Determines bearing capacity of soil in situ." },
            { name: "DCP (Dynamic Cone Penetrometer)", desc: "Rapid in-situ strength measurement." },
            { name: "Nuclear Density Gauge", desc: "Measures soil density and moisture content." },
        ],
        icon: Zap,
        gradient: "from-green-500 to-emerald-500"
    }
];

export default function LaboratoryPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/lab-bg.jpg')] bg-cover bg-center opacity-10" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory & Equipment</h1>
                    <p className="text-xl text-text-muted max-w-2xl">
                        Precision instruments for accurate results. Our lab is equipped to handle comprehensive testing requirements.
                    </p>
                </Container>
            </section>

            <Section className="bg-background-dark">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {equipment.map((category, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-gradient-to-br from-neutral to-background border border-neutral-light/20 rounded-xl p-8 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                            >
                                {/* Glowing gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Header with icon */}
                                <div className="relative flex items-center gap-4 mb-6 pb-4 border-b border-neutral-light/20">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <category.icon size={28} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {category.category}
                                    </h2>
                                </div>

                                {/* Equipment items */}
                                <div className="relative space-y-6">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="group/item relative pl-4 border-l-2 border-neutral-light/20 hover:border-accent/50 transition-colors">
                                            <h3 className="font-bold text-lg text-white group-hover/item:text-accent transition-colors mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
