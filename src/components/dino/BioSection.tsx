import { motion } from "framer-motion";

const BioSection = () => (
  <section className="section-padding bg-background">
    <div className="container max-w-4xl mx-auto text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-gold))] mb-8">
        Who is Swedish Papi?
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
        Dino isn't just a person — he's a <span className="text-[hsl(var(--dino-blue))] font-semibold">movement</span>.
        Half Scandinavian ice, half pure fire. He's the guy who shows up fashionably late and somehow becomes the
        <span className="text-[hsl(var(--dino-gold))] font-semibold"> center of the universe</span>. Whether he's
        dropping Swedish wisdom or just standing there looking like a Nordic god, Dino — aka Swedish Papi — is
        the definition of effortless cool. They tried to put him in IKEA but he was
        <span className="text-[hsl(var(--dino-blue))] font-semibold"> too legendary to assemble</span>. 🇸🇪👑
      </motion.p>
    </div>
  </section>
);

export default BioSection;
