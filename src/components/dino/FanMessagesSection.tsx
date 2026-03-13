import { motion, AnimatePresence } from "framer-motion";

export interface FanMessage {
  name: string;
  message: string;
  timestamp: number;
}

interface FanMessagesSectionProps {
  messages: FanMessage[];
}

const FanMessagesSection = ({ messages }: FanMessagesSectionProps) => {
  if (messages.length === 0) return null;

  return (
    <section id="fan-messages" className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-foreground mb-4"
        >
          Swedish Papi Fan Messages 💌
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-10"
        >
          Love from the fans around the world.
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={msg.timestamp + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border"
              >
                <p className="font-body text-foreground mb-3 italic">"{msg.message}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-primary text-lg">— {msg.name}</span>
                  <span className="text-xs text-muted-foreground font-body">
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FanMessagesSection;
