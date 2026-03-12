import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { STORAGE_KEY } from "./data";

interface JoinSectionProps {
  onMessageSubmit: (name: string, message: string) => void;
}

const JoinSection = ({ onMessageSubmit }: JoinSectionProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) { toast.error("Fill in both fields!"); return; }
    onMessageSubmit(name.trim(), message.trim());
    toast.success("Message sent to Swedish Papi! 🇸🇪");
    setName(""); setMessage("");
  };

  return (
    <section id="join-dino" className="section-padding bg-gradient-to-br from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-navy))]">
      <div className="container max-w-2xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display text-[hsl(var(--dino-gold))] mb-4">
          Leave a Message for Swedish Papi 📝
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/80 font-body mb-10">
          Show your love! Drop a message below.
        </motion.p>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="px-6 py-4 rounded-xl font-body text-foreground bg-card shadow-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--dino-gold))]" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message to Swedish Papi..." rows={3} className="px-6 py-4 rounded-xl font-body text-foreground bg-card shadow-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--dino-gold))] resize-none" />
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-full bg-[hsl(var(--dino-gold))] text-[hsl(var(--dino-navy))] font-body font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2 mx-auto">
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default JoinSection;
