import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ervan", text: "10/10 friend. Would recommend to anyone. Sometimes I get a bit clingy with him but i cant help it he is so hot", stars: 5 },
  { name: "Armin", text: "Legend in the making. Actually, already a legend. Dino goat would make him the Tutin major", stars: 5 },
  { name: "Lelja Sehovic", text: "he got that burger looking butttt", stars: 5 },
  { name: "Tikka", text: "He a cuttie pattotie , gotta start that gym thooo", stars: 5 },
  { name: "Trump", text: "If Dino was in USA the war would never happen cuz they wouldnt touch a swedish sexy papi like him", stars: 5 },
  { name: "Ibrahimovic", text: "I used to watch Dino play football growing up, thank god he diced to become fully balkan otherwise i wouldnt touch the ball again", stars: 5 },
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
