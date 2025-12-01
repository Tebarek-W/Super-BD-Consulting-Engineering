import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Award, BookOpen, Users, Briefcase, Mail, Linkedin } from "lucide-react";

export const metadata = {
    title: "Our Team | Super-BD Consulting Engineering",
    description: "Meet the experts behind Super-BD Consulting Engineering.",
};

const teamMembers = [
    {
        name: "Daniel Hailemariam",
        title: "General Manager & Pavement/Materials Engineer",
        degree: "M.Sc.",
        bio: "With over 13 years of experience in the construction and engineering sector, Daniel leads Super-BD with a focus on technical precision and quality assurance. His expertise spans pavement design, road safety engineering, and complex geotechnical investigations.",
        education: [
            "M.Sc. in Road & Transport Engineering",
            "B.Sc. in Civil Engineering"
        ],
        certifications: [
            "Professional Engineer (Ministry of Construction)",
            "ERA Certified (Road Construction Material QC)",
            "NMIE Professional Engineer"
        ],
        memberships: [
            "Ethiopian Association of Civil Engineers"
        ],
        software: [
            "Eagle Point, AutoCAD",
            "PLAXIS, GEOSLOPE",
            "DCP 3.1"
        ],
        email: "danielhailemariam4@gmail.com"
    },
    {
        name: "Dr. Abebe Worku",
        title: "Senior Geotechnical Engineer",
        degree: "Ph.D.",
        bio: "Dr. Abebe brings 15+ years of expertise in soil mechanics and foundation engineering. He specializes in deep foundation design and slope stability analysis for large-scale infrastructure projects.",
        education: [
            "Ph.D. in Geotechnical Engineering",
            "M.Sc. in Soil Mechanics",
            "B.Sc. in Civil Engineering"
        ],
        certifications: [
            "Professional Geotechnical Engineer",
            "ISO 9001 Lead Auditor"
        ],
        memberships: [
            "International Society for Soil Mechanics",
            "Ethiopian Society of Civil Engineers"
        ],
        software: [
            "PLAXIS 3D, GeoStudio",
            "SAFE, ETABS",
            "AutoCAD Civil 3D"
        ]
    },
    {
        name: "Tigist Mekonnen",
        title: "Materials Testing Manager",
        degree: "M.Sc.",
        bio: "Tigist oversees all laboratory operations with 8+ years of experience in materials testing and quality control. She ensures all tests comply with international standards and delivers accurate results.",
        education: [
            "M.Sc. in Construction Materials",
            "B.Sc. in Civil Engineering"
        ],
        certifications: [
            "ASTM Certified Technician",
            "Quality Control Manager (ISO 9001)"
        ],
        memberships: [
            "American Concrete Institute (ACI)"
        ],
        software: [
            "LabView, TestWare",
            "Microsoft Office Suite"
        ]
    },
    {
        name: "Solomon Tadesse",
        title: "Field Testing Supervisor",
        degree: "B.Sc.",
        bio: "Solomon leads field testing operations with 10+ years of hands-on experience in site investigations and in-situ testing. His practical approach ensures accurate data collection and timely reporting.",
        education: [
            "B.Sc. in Civil Engineering",
            "Diploma in Construction Technology"
        ],
        certifications: [
            "Field Testing Technician (FTT)",
            "NDT Level II Certified"
        ],
        memberships: [
            "Ethiopian Institute of Engineers"
        ],
        software: [
            "GPS/GIS Software",
            "Field Data Collection Apps"
        ]
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/team-bg.jpg')] bg-cover bg-center opacity-10" />
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
                    <p className="text-xl text-text-muted max-w-2xl">
                        Led by industry experts committed to engineering excellence and innovation.
                    </p>
                </Container>
            </section>

            <Section className="bg-background-dark">
                <Container>
                    <div className="space-y-12">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-gradient-to-br from-neutral to-background border border-neutral-light/20 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                            >
                                {/* Glowing gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="md:flex">
                                    {/* Profile Image Placeholder */}
                                    <div className="md:w-1/3 bg-gradient-to-br from-accent/10 to-accent-bright/10 min-h-[300px] relative">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-accent">
                                            <Users size={64} className="mb-4 opacity-50" />
                                            <span className="font-bold text-lg opacity-70">{member.name}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8 md:w-2/3">
                                        <div className="mb-6">
                                            <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                                                {member.name} {member.degree && `(${member.degree})`}
                                            </h2>
                                            <p className="text-accent-bright font-medium text-lg mb-2">{member.title}</p>
                                            {member.email && (
                                                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm">
                                                    <Mail size={16} />
                                                    {member.email}
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-text-muted mb-8 leading-relaxed">
                                            {member.bio}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3 text-white font-bold">
                                                    <BookOpen size={20} className="text-accent" />
                                                    <h3>Education</h3>
                                                </div>
                                                <ul className="text-sm text-text-muted space-y-1">
                                                    {member.education.map((edu, i) => (
                                                        <li key={i}>• {edu}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-3 text-white font-bold">
                                                    <Award size={20} className="text-accent" />
                                                    <h3>Certifications</h3>
                                                </div>
                                                <ul className="text-sm text-text-muted space-y-1">
                                                    {member.certifications.map((cert, i) => (
                                                        <li key={i}>• {cert}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {member.memberships && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3 text-white font-bold">
                                                        <Users size={20} className="text-accent" />
                                                        <h3>Memberships</h3>
                                                    </div>
                                                    <ul className="text-sm text-text-muted space-y-1">
                                                        {member.memberships.map((mem, i) => (
                                                            <li key={i}>• {mem}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {member.software && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3 text-white font-bold">
                                                        <Briefcase size={20} className="text-accent" />
                                                        <h3>Software Expertise</h3>
                                                    </div>
                                                    <ul className="text-sm text-text-muted space-y-1">
                                                        {member.software.map((sw, i) => (
                                                            <li key={i}>• {sw}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
