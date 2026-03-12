import { motion } from "framer-motion";
import { reasons } from "./data";

const WhyPeopleLoveSection = () => (
  <section className="section-padding bg-muted">
    <div className="container max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display text-center bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-gold))] mb-14">
        Why People Love Dino
      </motion.h2>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <motion.div key={r.title} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8, scale: 1.03 }} className="rounded-2xl p-8 text-center shadow-lg bg-card cursor-default">
            <div className={`w-16 h-16 rounded-2xl ${r.color} flex items-center justify-center mx-auto mb-4`}>
              <r.icon className="w-8 h-8" />
            </div>
            <span className="text-3xl mb-2 block">{r.emoji}</span>
            <h3 className="text-xl font-body font-bold text-foreground">{r.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyPeopleLoveSection;
