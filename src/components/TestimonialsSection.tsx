import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Alex", text: "10/10 friend. Would recommend to anyone.", stars: 5 },
  { name: "Sarah", text: "Legend in the making. Actually, already a legend.", stars: 5 },
  { name: "Jake", text: "Would hang out again. And again. And again.", stars: 5 },
  { name: "Emma", text: "Micko walked in and the whole vibe changed. For the better.", stars: 5 },
  { name: "Chris", text: "If friendship was a sport, Micko would be MVP every season.", stars: 5 },
  { name: "Mia", text: "He once made me laugh so hard I cried for 20 minutes.", stars: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-gradient mb-14"
        >
          Fan Testimonials ⭐
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-6 shadow-md"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sunny text-sunny" />
                ))}
              </div>
              <p className="text-foreground font-body mb-4">"{t.text}"</p>
              <p className="text-sm font-body text-muted-foreground font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
