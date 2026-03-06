import { motion } from "framer-motion";
import mickoHero from "@/assets/micko-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-fun">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sunny/30 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 flex flex-col items-center gap-8 py-20 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl mx-auto">
            <img src={mickoHero} alt="The legendary Micko" className="w-full h-full object-cover" />
          </div>
          <motion.span
            className="absolute -bottom-2 -right-2 text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            😎
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-primary-foreground drop-shadow-lg"
        >
          Welcome to the Official Micko Fan Club 😎
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-2xl font-body text-primary-foreground/90 max-w-2xl"
        >
          Celebrating the legend, the vibe, the man himself.
        </motion.p>

        <motion.a
          href="#join"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-8 py-4 rounded-full bg-card text-foreground font-body font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
        >
          🎉 Join the Fan Club
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
