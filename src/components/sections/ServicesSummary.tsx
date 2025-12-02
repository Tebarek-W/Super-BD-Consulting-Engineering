import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Layers, Beaker, Truck, HardHat, FileText, Activity, Building2, Route, Drill, Sprout } from "lucide-react";

const services = [
    {
        title: "Soil Investigation",
        description: "Comprehensive soil analysis for foundation design and stability assessments.",
        icon: Layers,
        image: "/images/soil-investigation.jpg"
    },
    {
        title: "Concrete Testing",
        description: "Quality control testing for concrete mixes, strength, and durability.",
        icon: Beaker,
        image: "/images/lab-photo.jpg"
    },
    {
        title: "Geotechnical Investigation",
        description: "In-depth subsurface exploration for bridges, dams, and buildings.",
        icon: Activity,
        image: "/images/hero-dam.png"
    },
    {
        title: "Material Testing",
        description: "Testing of aggregates, asphalt, and other construction materials.",
        icon: Truck,
        image: "/images/services-photo.jpg"
    },
    {
        title: "Consultancy",
        description: "Expert engineering advice and technical reporting for complex projects.",
        icon: HardHat,
        image: "/images/hero-building.png"
    },
    {
        title: "Reporting",
        description: "Detailed data interpretation and certification for regulatory compliance.",
        icon: FileText,
        image: "/images/hero-bridge.png"
    },
];

const industries = [
    {
        title: "Civil Engineering & Construction",
        icon: Building2,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Infrastructure & Transportation",
        icon: Route,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Mining & Energy",
        icon: Drill,
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Environmental & Land Development",
        icon: Sprout,
        gradient: "from-green-500 to-emerald-500"
    },
];

export default function ServicesSummary() {
    return (
        <Section className="bg-neutral">
            <Container>
                {/* Services Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Expertise</h2>
                    <p className="text-text-muted">
                        We deliver accurate, reliable, and timely engineering solutions tailored to the unique needs of the construction and infrastructure sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                            <CardHeader className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-accent border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <service.icon size={28} className="group-hover:text-accent-bright transition-colors" />
                                </div>
                                <CardTitle className="text-xl mb-2 text-white group-hover:text-accent transition-colors">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <CardDescription className="text-base text-gray-200 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Industries We Serve Section */}
                <div className="pt-12 border-t border-neutral-light/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Industries We Serve</h2>
                        <p className="text-text-muted">
                            Providing specialized engineering solutions across diverse sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-gradient-to-br from-neutral to-background-dark border border-neutral-light/20 rounded-xl p-8 hover:border-accent/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                            >
                                {/* Glowing effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon with gradient background */}
                                <div className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                    <industry.icon size={32} className="text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="relative text-center font-bold text-white group-hover:text-accent transition-colors text-lg">
                                    {industry.title}
                                </h3>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
