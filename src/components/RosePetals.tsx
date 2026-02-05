import { motion } from "framer-motion";
import { useMemo } from "react";

const RosePetals = () => {
  const petals = useMemo(() => {
     return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
       delay: Math.random() * 10,
       duration: 12 + Math.random() * 10,
       size: 14 + Math.random() * 16,
      rotation: Math.random() * 360,
       petal: ['🌸', '🌺', '💮', '🏵️'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            fontSize: petal.size,
          }}
           initial={{ y: "-5vh", rotate: petal.rotation, opacity: 0.85 }}
          animate={{
            y: "105vh",
            rotate: petal.rotation + 720,
             x: [0, 60, -40, 50, -30, 70, -20],
             opacity: [0.85, 0.75, 0.65, 0.5, 0.35, 0.2],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
           {petal.petal}
        </motion.div>
      ))}
    </div>
  );
};

export default RosePetals;