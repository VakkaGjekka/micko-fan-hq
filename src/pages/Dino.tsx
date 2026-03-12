import { useState, useEffect } from "react";
import HeroSection from "../components/dino/HeroSection";
import BioSection from "../components/dino/BioSection";
import WhyPeopleLoveSection from "../components/dino/WhyPeopleLoveSection";
import QuotesSection from "../components/dino/QuotesSection";
import TestimonialsSection from "../components/dino/TestimonialsSection";
import JoinSection from "../components/dino/JoinSection";
import FanMessagesSection from "../components/dino/FanMessagesSection";
import Footer from "../components/dino/Footer";
import { STORAGE_KEY } from "../components/dino/data";

interface FanMessage {
  name: string;
  message: string;
  timestamp: string;
}

const Dino = () => {
  const [fanMessages, setFanMessages] = useState<FanMessage[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fanMessages));
  }, [fanMessages]);

  const handleMessageSubmit = (name: string, message: string) => {
    setFanMessages(prev => [{
      name,
      message,
      timestamp: new Date().toISOString()
    }, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <WhyPeopleLoveSection />
      <QuotesSection />
      <TestimonialsSection />
      <JoinSection onMessageSubmit={handleMessageSubmit} />
      <FanMessagesSection messages={fanMessages} />
      <Footer />
    </div>
  );
};

export default Dino;