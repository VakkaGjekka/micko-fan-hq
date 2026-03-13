import { motion } from "framer-motion";
import gallery1 from "@/assets/DinoCafe.jpg";
import gallery2 from "@/assets/DinoScarf.jpg";
import gallery3 from "@/assets/DinoMuseum.jpg";
import gallery4 from "@/assets/DinoPark.jpg";

const photos = [
  { src: gallery1, caption: "Swedish Papi keeping it casual at the café ☕" },
  { src: gallery2, caption: "Mystery mode activated 🧣😎" },
  { src: gallery3, caption: "Art appreciator extraordinaire 🎨" },
  { src: gallery4, caption: "Park Güell? More like Park Papi 🌴" },
];

const HallOfFameSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display text-center text-gradient mb-14"
        >
          Hall of Fame 🏆
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img src={photo.src} alt={photo.caption} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-end">
                <p className="p-4 text-primary-foreground font-body font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;