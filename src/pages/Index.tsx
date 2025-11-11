import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import KeyAreasSection from "@/components/KeyAreasSection";
import ProgramsSection from "@/components/ProgramsSection";
import MethodologySection from "@/components/MethodologySection";
import ResourcesSection from "@/components/ResourcesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PromiseSection from "@/components/PromiseSection";
import FaqSection from "@/components/FaqSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <KeyAreasSection />
      <ProgramsSection />
      <MethodologySection />
      <ResourcesSection />
      <EventsSection />
      <TestimonialsSection />
      <PromiseSection />
      <FaqSection />
      <EnrollmentSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
