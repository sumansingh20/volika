import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypewriterText from "../TypewriterText";

const shayaris = [
  {
    hindi: "Tumhari ek muskurahat ke liye,\nDil har baar haar jaata hai,\nVolika, tum sirf pasand nahi ho,\nTum meri aadat ban chuki ho.",
    meaning: "For just one smile of yours, my heart surrenders every time. Volika, you're not just someone I like — you've become my beautiful habit.",
  },
  {
    hindi: "Naam tumhara jab bhi zubaan par aata hai,\nDil apne aap muskurane lagta hai,\nKuch khaas hai tum mein Volika,\nJo har pal apna sa lagta hai.",
    meaning: "Whenever your name comes to my lips, my heart starts smiling on its own. There's something special about you, Volika, that makes every moment feel like home.",
  },
  {
    hindi: "Ishq sirf lafzon ka khel nahi hota,\nWoh ehsaas hota hai jo chup chaap reh jaata hai,\nAur tum, Volika,\nMere har ehsaas ka sabab ho.",
    meaning: "Love isn't just a game of words — it's a feeling that quietly stays within. And you, Volika, are the reason behind every emotion I feel.",
  },
];

const ShayariCard = ({ shayari, index }: { shayari: typeof shayaris[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative max-w-2xl mx-auto mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="relative card-romantic text-center">
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl">✨</div>
        
        {/* Shayari text */}
        <TypewriterText
          text={shayari.hindi}
          className="font-elegant text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed whitespace-pre-line mb-6"
          delay={0.3}
        />
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <span className="text-primary text-xl">❤</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        
        {/* Meaning */}
        <motion.p
          className="font-body text-base sm:text-lg text-muted-foreground italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {shayari.meaning}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ShayariSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-6 romantic-gradient overflow-hidden">
      {/* Section Title */}
      <motion.div
        ref={ref}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
          Words From The Heart
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          Shayaris written with love, just for you
        </p>
      </motion.div>

      {/* Shayari Cards */}
      <div className="max-w-4xl mx-auto">
        {shayaris.map((shayari, index) => (
          <ShayariCard key={index} shayari={shayari} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ShayariSection;