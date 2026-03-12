import { motion, AnimatePresence } from "framer-motion";

interface FanMessage {
  name: string;
  message: string;
  timestamp: string;
}

interface FanMessagesSectionProps {
  messages: FanMessage[];
}

const FanMessagesSection = ({ messages }: FanMessagesSectionProps) => {
  if (messages.length === 0) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display text-center bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-gold))] mb-4">
          Swedish Papi Fan Messages 💌
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-muted-foreground font-body mb-10">
          Love from the fans
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div key={msg.timestamp} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-2xl p-5 shadow-md">
                <p className="font-body text-foreground mb-2">"{msg.message}"</p>
                <p className="text-sm font-body text-muted-foreground font-semibold">— {msg.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FanMessagesSection;
