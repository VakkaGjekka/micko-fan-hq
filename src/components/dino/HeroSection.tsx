import { motion } from "framer-motion";
import dinoHero from "@/assets/DinoHero.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-navy))]">
    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[hsl(var(--dino-gold))]/30 blur-3xl animate-float" />
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[hsl(var(--dino-ice))]/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    <div className="container relative z-10 flex flex-col items-center gap-8 py-20 text-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[hsl(var(--dino-gold))] shadow-2xl mx-auto bg-[hsl(var(--dino-ice))]/20 flex items-center justify-center">
          <span className="text-8xl">🇸🇪</span>
        </div>
        <motion.span className="absolute -bottom-2 -right-2 text-5xl" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>👑</motion.span>
      </motion.div>
      <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl md:text-6xl lg:text-7xl font-display text-[hsl(var(--dino-gold))] drop-shadow-lg">
        Welcome to the Official Swedish Papi Fan Club 👑
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-2xl font-body text-white/90 max-w-2xl">
        Celebrating Dino — the one, the only, the Swedish Papi.
      </motion.p>
      <motion.a href="#join-dino" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="mt-4 px-8 py-4 rounded-full bg-[hsl(var(--dino-gold))] text-[hsl(var(--dino-navy))] font-body font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
        👑 Join the Fan Club
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
