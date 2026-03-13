import { useState, useEffect } from "react";
import HeroSection from "../components/dino/HeroSection";
import BioSection from "../components/dino/BioSection";
import WhyPeopleLoveSection from "../components/dino/WhyPeopleLoveSection";
import HallOfFameSection from "../components/dino/HallOfFameSection";
import QuotesSection from "../components/dino/QuotesSection";
import TestimonialsSection from "../components/dino/TestimonialsSection";
import JoinSection from "../components/dino/JoinSection";
import FanMessagesSection, { FanMessage } from "../components/dino/FanMessagesSection";
import Footer from "../components/dino/Footer";
import { STORAGE_KEY } from "../components/dino/data";

const Dino = () => {
  const [fanMessages, setFanMessages] = useState<FanMessage[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fanMessages));
  }, [fanMessages]);

  const handleNewMessage = (msg: FanMessage) => {
    setFanMessages(prev => [msg, ...prev]);
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

export default Dino;