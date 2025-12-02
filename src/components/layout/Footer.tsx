import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-text-dark pt-20 pb-10 border-t border-neutral-light/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-hover to-accent flex items-center justify-center p-2.5 shadow-lg shadow-accent/30">
                                <img
                                    src="/logo.png"
                                    alt="Super BD Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none text-white">Super-BD</span>
                                <span className="text-xs font-medium text-text-muted">Consulting Engineering</span>
                            </div>
                        </div>
                        <p className="text-text-muted text-sm mb-6 leading-relaxed">
                            A leading Geotechnical Engineering & Materials Testing Laboratory in Ethiopia, providing ISO-9001 certified services for construction, roads, and infrastructure projects.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-accent/30 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Projects", href: "/projects" },
                                { name: "Laboratory", href: "/laboratory" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-accent/30 pb-2 inline-block">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Soil Investigation", id: "soil-investigation" },
                                { name: "Concrete Testing", id: "concrete-testing" },
                                { name: "Asphalt Testing", id: "asphalt-testing" },
                                { name: "Geotechnical Investigation", id: "geotechnical-investigation" },
                                { name: "Environmental Testing", id: "environmental-testing" },
                                { name: "Consultancy & Reporting", id: "consultancy" },
                            ].map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services#${service.id}`}
                                        className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-accent/30 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text-muted text-sm">
                                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                                <span>Hawassa, Ethiopia</span>
                            </li>
                            <li className="flex items-start gap-3 text-text-muted text-sm">
                                <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+251913609241" className="hover:text-accent transition-colors">+251-913-609-241</a>
                                    <a href="tel:+251922778952" className="hover:text-accent transition-colors">+251-922-778952</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-text-muted text-sm">
                                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:danielhailemariam4@gmail.com" className="hover:text-accent transition-colors">danielhailemariam4@gmail.com</a>
                                    <a href="mailto:Dani200477@yahoo.com" className="hover:text-accent transition-colors">Dani200477@yahoo.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-light/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} Super-BD Consulting Engineering. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-text-muted">
                        <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
