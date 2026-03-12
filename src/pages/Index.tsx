import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import WhyPeopleLoveSection from "@/components/WhyPeopleLoveSection";
import HallOfFameSection from "@/components/HallOfFameSection";
import QuotesSection from "@/components/QuotesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinSection from "@/components/JoinSection";
import FanMessagesSection, { FanMessage } from "@/components/FanMessagesSection";
import Footer from "@/components/Footer";

const STORAGE_KEY = "micko-fan-messages";

const Index = () => {
  const [fanMessages, setFanMessages] = useState<FanMessage[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fanMessages));
  }, [fanMessages]);

  const handleNewMessage = (msg: FanMessage) => {
    setFanMessages((prev) => [msg, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <WhyPeopleLoveSection />
      <HallOfFameSection />
      <QuotesSection />
      <TestimonialsSection />
      <JoinSection onNewMessage={handleNewMessage} />
      <FanMessagesSection messages={fanMessages} />
      <Footer />
    </div>
  );
};

export default Index;
