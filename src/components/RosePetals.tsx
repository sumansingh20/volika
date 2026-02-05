import { motion } from "framer-motion";
import { useMemo } from "react";

const RosePetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 8,
      size: 16 + Math.random() * 12,
      rotation: Math.random() * 360,
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
          initial={{ y: "-5vh", rotate: petal.rotation, opacity: 0.9 }}
          animate={{
            y: "105vh",
            rotate: petal.rotation + 720,
            x: [0, 50, -30, 40, -20, 60],
            opacity: [0.9, 0.8, 0.7, 0.5, 0.3],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default RosePetals;