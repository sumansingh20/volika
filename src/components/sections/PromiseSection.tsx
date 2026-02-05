import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const promises = [
  "To always respect your feelings and your boundaries",
  "To be someone you can trust with your thoughts",
  "To support you in your dreams and celebrate your wins",
  "To be there in your lows, quietly and sincerely",
  "To never take your presence for granted",
  "To always choose kindness in how I treat you",
];

const PromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(350 60% 97%) 0%, hsl(20 50% 96%) 50%, hsl(350 50% 98%) 100%)",
            "linear-gradient(135deg, hsl(20 50% 96%) 0%, hsl(350 60% 97%) 50%, hsl(45 30% 96%) 100%)",
            "linear-gradient(45deg, hsl(350 60% 97%) 0%, hsl(20 50% 96%) 50%, hsl(350 50% 98%) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
            My Promises To You
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-2xl">🤍</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </motion.div>

        {/* Promises */}
        <div className="space-y-4">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
                {/* Heart bullet */}
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  ❤️
                </motion.div>
                
                {/* Promise text */}
                <p className="font-elegant text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {promise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;