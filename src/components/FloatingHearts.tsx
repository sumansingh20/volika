import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 12 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: "100vh", rotate: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -15, 10, -10, 0],
            x: [0, 30, -20, 25, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;