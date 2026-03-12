import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import WhyPeopleLoveSection from "./WhyPeopleLoveSection";
import QuotesSection from "./QuotesSection";
import TestimonialsSection from "./TestimonialsSection";
import JoinSection from "./JoinSection";
import FanMessagesSection from "./FanMessagesSection";
import Footer from "./Footer";
import { STORAGE_KEY } from "./data";

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
