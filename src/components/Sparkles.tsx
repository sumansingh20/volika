import { motion } from "framer-motion";
import { useMemo } from "react";

interface SparklesProps {
  count?: number;
}

 const Sparkles = ({ count = 50 }: SparklesProps) => {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
       duration: 1.5 + Math.random() * 3,
       size: 2 + Math.random() * 6,
       color: Math.random() > 0.5 ? 'bg-accent' : 'bg-primary/60',
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
           className={`absolute rounded-full ${sparkle.color}`}
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
             boxShadow: `0 0 ${sparkle.size * 2}px hsl(45 80% 55% / 0.5)`,
          }}
          animate={{
             opacity: [0.1, 1, 0.1],
             scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;