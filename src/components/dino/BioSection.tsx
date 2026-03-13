import { motion } from "framer-motion";

const BioSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-gradient mb-8"
        >
          Who is Micko?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed"
        >
          Swedish papi  isn't just a person — he's a <span className="text-primary font-semibold">vibe</span>.
          The kind of friend who shows up and instantly makes everything better. He's the guy with
          the perfect joke at the perfect time, the one who turns random hangouts into
          <span className="text-secondary font-semibold"> legendary memories</span>. Whether he's
          dropping wisdom or cracking up the whole room, Swedish papi is certified unforgettable.
          Some say he was born cool. Others say coolness was born from him. Either way,
          <span className="text-primary font-semibold"> the world is a better place with swedish papi innit in it</span>. 🌟
        </motion.p>
      </div>
    </section>
  );
};

export default BioSection;
