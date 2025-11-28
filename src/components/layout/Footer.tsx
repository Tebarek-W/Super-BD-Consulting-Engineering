import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-primary font-bold text-xl">
                                S
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none">Super-BD</span>
                                <span className="text-xs font-medium opacity-80">Consulting Engineering</span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            A leading Geotechnical Engineering & Materials Testing Laboratory in Ethiopia, providing ISO-9001 certified services for construction, roads, and infrastructure projects.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Projects", href: "/projects" },
                                { name: "Laboratory", href: "/laboratory" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                "Soil Investigation",
                                "Concrete Testing",
                                "Asphalt Testing",
                                "Geotechnical Investigation",
                                "Environmental Testing",
                                "Consultancy & Reporting",
                            ].map((service) => (
                                <li key={service} className="text-gray-300 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                                <span>Hawassa, Ethiopia</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                                <div className="flex flex-col">
                                    <span>+251-913-609-241</span>
                                    <span>+251-922-778-952</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                                <div className="flex flex-col">
                                    <span>danielhailemariam4@gmail.com</span>
                                    <span>Dani200477@yahoo.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Super-BD Consulting Engineering. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
