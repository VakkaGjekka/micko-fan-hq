import { motion } from "framer-motion";
import { quotes } from "./data";

const QuotesSection = () => (
  <section className="section-padding bg-gradient-to-br from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-navy))]">
    <div className="container max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display text-center text-[hsl(var(--dino-gold))] mb-14">
        Swedish Papi Quotes 💬
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ rotate: Math.random() > 0.5 ? 1 : -1, scale: 1.02 }} className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <span className="text-3xl mb-3 block">{q.emoji}</span>
            <p className="text-lg font-body text-foreground italic">"{q.text}"</p>
            <p className="text-sm text-muted-foreground mt-2 font-body">— Swedish Papi, obviously</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuotesSection;
