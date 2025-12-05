import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSummary from "@/components/sections/ServicesSummary";
import CertificationsIndustries from "@/components/sections/CertificationsIndustries";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata = {
  title: "Super-BD Consulting | Top Civil Engineering Firm in Ethiopia",
  description: "Leading civil engineering consultancy in Ethiopia. Experts in geotechnical investigation, structural design, material testing, and construction supervision.",
  openGraph: {
    title: "Super-BD Consulting | Top Civil Engineering Firm in Ethiopia",
    description: "Leading civil engineering consultancy in Ethiopia. Experts in geotechnical investigation, structural design, material testing, and construction supervision.",
    images: ["https://www.superbd-consulting.com/images/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super-BD Consulting | Top Civil Engineering Firm in Ethiopia",
    description: "Leading civil engineering consultancy in Ethiopia. Experts in geotechnical investigation, structural design, material testing, and construction supervision.",
    images: ["https://www.superbd-consulting.com/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ServicesSummary />
      <CertificationsIndustries />
      <FeaturedProjects />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
