import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import WhyPeopleLoveSection from "@/components/WhyPeopleLoveSection";
import HallOfFameSection from "@/components/HallOfFameSection";
import QuotesSection from "@/components/QuotesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <WhyPeopleLoveSection />
      <HallOfFameSection />
      <QuotesSection />
      <TestimonialsSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
