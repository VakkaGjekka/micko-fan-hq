import { motion } from "framer-motion";
import { Heart, Users, Laugh, Snowflake } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Always Brings Good Vibes", emoji: "✨", color: "bg-coral/10 text-primary" },
  { icon: Users, title: "Loyal Friend", emoji: "🤝", color: "bg-teal/10 text-secondary" },
  { icon: Laugh, title: "Naturally Funny", emoji: "😂", color: "bg-sunny/20 text-accent-foreground" },
  { icon: Snowflake, title: "Certified Chill Guy", emoji: "🧊", color: "bg-lavender text-foreground" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyPeopleLoveSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-gradient mb-14"
        >
          Why People Love Swedish Papi
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`rounded-2xl p-8 text-center shadow-lg bg-card cursor-default`}
            >
              <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mx-auto mb-4`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <span className="text-3xl mb-2 block">{reason.emoji}</span>
              <h3 className="text-xl font-body font-bold text-foreground">{reason.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPeopleLoveSection;

