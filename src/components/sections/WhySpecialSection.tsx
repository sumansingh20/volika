import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Sun, Star } from "lucide-react";

const qualities = [
  {
    icon: Heart,
    title: "Her Beautiful Smile",
    description: "That smile could light up the darkest corners of any heart. It's genuine, warm, and absolutely infectious.",
  },
  {
    icon: Sparkles,
    title: "Her Kindness",
    description: "The way she cares for others, the gentleness in her words — it's rare and precious beyond measure.",
  },
  {
    icon: Sun,
    title: "Her Calm Presence",
    description: "Being around her feels like a peaceful sunset. Everything just feels... right.",
  },
  {
    icon: Star,
    title: "The Way She Makes Everything Lighter",
    description: "Heavy days become bearable, worries feel smaller, and hope feels closer — all because of her.",
  },
];

const QualityCard = ({ quality, index }: { quality: typeof qualities[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = quality.icon;

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div className="relative card-romantic overflow-hidden group-hover:shadow-lg transition-all duration-500">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        
        <div className="relative flex items-start gap-5">
          {/* Icon */}
          <div className="flex-shrink-0">
            <motion.div
              className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-7 h-7 text-primary" />
            </motion.div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="font-elegant text-xl sm:text-2xl text-foreground mb-2">
              {quality.title}
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              {quality.description}
            </p>
          </div>
        </div>
        
        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 transform rotate-45 translate-x-4 -translate-y-4" />
        </div>
      </div>
    </motion.div>
  );
};

const WhySpecialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
            Why Volika Is Special
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            A few of the million reasons
          </p>
        </motion.div>

        {/* Quality Cards */}
        <div className="space-y-6">
          {qualities.map((quality, index) => (
            <QualityCard key={index} quality={quality} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpecialSection;