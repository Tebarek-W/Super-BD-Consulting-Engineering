import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
    title: "Contact Us | Super-BD Consulting Engineering",
    description: "Get in touch with us for quotes, inquiries, or to visit our laboratory.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Page Header */}
            <PageHero
                title="Contact Us"
                description="We are here to answer your questions and discuss your project needs."
                image="/images/contact-hero.jpg"
            />

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-white">Visit Our Lab</h3>
                                        <p className="text-gray-300">
                                            Hawassa, Ethiopia<br />
                                            (Near Hawassa University Main Campus)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-white">Call Us</h3>
                                        <p className="text-gray-300">
                                            +251-913-609-241<br />
                                            +251-922-778-952<br />
                                            +251-914-043-105
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-white">Email Us</h3>
                                        <p className="text-gray-300">
                                            danielhailemariam4@gmail.com<br />
                                            Dani200477@yahoo.com<br />
                                            Dani200477@hu.edu.et
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 text-white">Working Hours</h3>
                                        <p className="text-gray-300">
                                            Monday - Friday: 8:00 AM - 5:30 PM<br />
                                            Saturday: 8:00 AM - 12:30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.123456789012!2d38.47!3d7.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnMDAuMCJOIDM4wrAyOCwwMC4wIkU!5e0!3m2!1sen!2set!4v1600000000000!5m2!1sen!2set"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                    suppressHydrationWarning
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
