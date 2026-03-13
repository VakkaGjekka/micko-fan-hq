import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FanMessage } from "./FanMessagesSection";

interface JoinSectionProps {
  onNewMessage: (msg: FanMessage) => void;
}

const JoinSection = ({ onNewMessage }: JoinSectionProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onNewMessage({ name: name.trim(), message: message.trim(), timestamp: Date.now() });
    toast.success(`Welcome to the Swedish Papi Fan Club, ${name}! 🎉`);
    setName("");
    setMessage("");
  };

  return (
    <section id="join" className="section-padding bg-gradient-fun">
      <div className="container max-w-lg mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-primary-foreground mb-4"
        >
          Join the Fan Club 🎉
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/80 font-body mb-10"
        >
          Drop your name and a message for the legend himself.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 shadow-2xl space-y-5"
        >
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1">Message for Micko</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Micko how awesome he is..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl bg-gradient-fun text-primary-foreground font-body font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Submit 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default JoinSection;
