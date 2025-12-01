import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSummary from "@/components/sections/ServicesSummary";
import CertificationsIndustries from "@/components/sections/CertificationsIndustries";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

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
