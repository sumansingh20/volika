import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => {
     return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
       duration: 10 + Math.random() * 10,
       size: 10 + Math.random() * 24,
       opacity: 0.15 + Math.random() * 0.35,
       heart: ['❤', '💕', '💗', '💖', '💝'][Math.floor(Math.random() * 5)],
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
             rotate: [0, 20, -20, 15, -15, 0],
             x: [0, 40, -30, 35, -20, 0],
             scale: [1, 1.1, 1, 1.15, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
           {heart.heart}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;