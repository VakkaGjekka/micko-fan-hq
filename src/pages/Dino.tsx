import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, Users, Laugh, Crown, Send } from "lucide-react";
import { toast } from "sonner";

// ── Types ──
interface FanMessage {
  name: string;
  message: string;
  timestamp: string;
}

// ── Data ──
const reasons = [
  { icon: Crown, title: "Swedish Royalty Energy", emoji: "👑", color: "bg-[hsl(var(--dino-gold))]/10 text-[hsl(var(--dino-blue))]" },
  { icon: Users, title: "Life of the Party", emoji: "🎉", color: "bg-[hsl(var(--dino-ice))]/30 text-[hsl(var(--dino-blue))]" },
  { icon: Laugh, title: "Effortlessly Hilarious", emoji: "😂", color: "bg-[hsl(var(--dino-gold))]/20 text-[hsl(var(--dino-navy))]" },
  { icon: Heart, title: "Heart of Gold", emoji: "💛", color: "bg-[hsl(var(--dino-ice))]/20 text-[hsl(var(--dino-blue))]" },
];

const quotes = [
  { text: "I'm not Swedish for nothing.", emoji: "🇸🇪" },
  { text: "Papi doesn't chase, papi attracts.", emoji: "🧲" },
  { text: "They call me Swedish Papi for a reason.", emoji: "😏" },
  { text: "Cold weather, hot vibes.", emoji: "❄️" },
  { text: "Scandinavian by birth, legend by choice.", emoji: "🏔️" },
  { text: "I don't need IKEA instructions to build greatness.", emoji: "🔨" },
];

const testimonials = [
  { name: "Filip", text: "Dino is the kind of guy who walks in and the temperature drops because he's that cool.", stars: 5 },
  { name: "Micko", text: "Swedish Papi is the real deal. Even I'm a fan.", stars: 5 },
  { name: "Kristi", text: "Dino has that Scandinavian charm that's impossible to resist.", stars: 5 },
  { name: "Arslan", text: "Bro got the Swedish rizz on another level fr fr.", stars: 5 },
  { name: "Ervan", text: "Dino walked in and everyone forgot their name.", stars: 5 },
  { name: "ABBA", text: "He's our dancing queen. Well, king.", stars: 5 },
];

const STORAGE_KEY = "dino-fan-messages";

// ── Page ──
const Dino = () => {
  const [fanMessages, setFanMessages] = useState<FanMessage[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fanMessages));
  }, [fanMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) { toast.error("Fill in both fields!"); return; }
    setFanMessages(prev => [{ name: name.trim(), message: message.trim(), timestamp: new Date().toISOString() }, ...prev]);
    toast.success("Message sent to Swedish Papi! 🇸🇪");
    setName(""); setMessage("");
  };

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-navy))]">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[hsl(var(--dino-gold))]/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[hsl(var(--dino-ice))]/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="container relative z-10 flex flex-col items-center gap-8 py-20 text-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[hsl(var(--dino-gold))] shadow-2xl mx-auto bg-[hsl(var(--dino-ice))]/20 flex items-center justify-center">
              <span className="text-8xl">🇸🇪</span>
            </div>
            <motion.span className="absolute -bottom-2 -right-2 text-5xl" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>👑</motion.span>
          </motion.div>
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl md:text-6xl lg:text-7xl font-display text-[hsl(var(--dino-gold))] drop-shadow-lg">
            Welcome to the Official Swedish Papi Fan Club 👑
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-2xl font-body text-white/90 max-w-2xl">
            Celebrating Dino — the one, the only, the Swedish Papi.
          </motion.p>
          <motion.a href="#join-dino" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="mt-4 px-8 py-4 rounded-full bg-[hsl(var(--dino-gold))] text-[hsl(var(--dino-navy))] font-body font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
            👑 Join the Fan Club
          </motion.a>
        </div>
      </section>

      {/* ── Bio ── */}
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

      {/* ── Why People Love ── */}
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

      {/* ── Quotes ── */}
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

      {/* ── Testimonials ── */}
      <section className="section-padding bg-muted">
        <div className="container max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display text-center bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dino-blue))] to-[hsl(var(--dino-gold))] mb-14">
            Fan Testimonials ⭐
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="bg-card rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[hsl(var(--dino-gold))] text-[hsl(var(--dino-gold))]" />
                  ))}
                </div>
                <p className="text-foreground font-body mb-4">"{t.text}"</p>
                <p className="text-sm font-body text-muted-foreground font-semibold">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join ── */}
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

      {/* ── Fan Messages ── */}
      {fanMessages.length > 0 && (
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
                {fanMessages.map((msg, i) => (
                  <motion.div key={msg.timestamp} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-2xl p-5 shadow-md">
                    <p className="font-body text-foreground mb-2">"{msg.message}"</p>
                    <p className="text-sm font-body text-muted-foreground font-semibold">— {msg.name}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="py-8 px-4 bg-[hsl(var(--dino-navy))] text-center">
        <p className="font-body text-white/80 text-sm">
          This fan club proudly supports <span className="font-bold text-[hsl(var(--dino-gold))]">Dino</span> — the Swedish Papi. 👑
        </p>
        <p className="font-body text-white/40 text-xs mt-2">
          © {new Date().getFullYear()} Swedish Papi Fan Club. All vibes reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dino;
