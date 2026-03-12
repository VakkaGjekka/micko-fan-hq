import { motion } from "framer-motion";

const quotes = [
  { text: "Ni Hao fine shyt", emoji: "🧠" },
  { text: "That's a future me problem.", emoji: "😎" },
  { text: "I'm not late, I'm just MICKO", emoji: "⌚" },
  { text: "Dje si mala, sto ciniiiiiiisss", emoji: "💰" },
  { text: "sometimes Filip watches me in a naughty way, me gusta", emoji: "📺" },
  { text: "My plans? I don't make plans. Plans make Micko", emoji: "🗓️" },
];

const QuotesSection = () => {
  return (
    <section className="section-padding bg-gradient-cool">
      <div className="container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-primary-foreground mb-14"
        >
          Micko Quotes 💬
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: Math.random() > 0.5 ? 1 : -1, scale: 1.02 }}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <span className="text-3xl mb-3 block">{quote.emoji}</span>
              <p className="text-lg font-body text-foreground italic">"{quote.text}"</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">— Micko, probably</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
