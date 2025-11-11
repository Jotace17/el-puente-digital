import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ResourcesSection from "@/components/ResourcesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustFaqSection from "@/components/TrustFaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ResourcesSection />
      <EventsSection />
      <TestimonialsSection />
      <TrustFaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
