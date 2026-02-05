import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlowingHeart from "../GlowingHeart";
import Sparkles from "../Sparkles";
import nightBg from "@/assets/night-bg.jpg";

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nightBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Sparkles */}
      <Sparkles count={50} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Glowing Heart */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          <GlowingHeart size="xl" />
        </motion.div>

        {/* Final Message */}
        <motion.p
          className="font-elegant text-2xl sm:text-3xl md:text-4xl text-primary-foreground leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          "Volika, no matter where life takes us,
          <br />
          <span className="text-accent">you'll always be someone my heart chooses.</span>"
        </motion.p>

        {/* Signature */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="font-handwritten text-4xl sm:text-5xl text-primary-foreground text-shadow-glow">
            Forever Yours
          </p>
          <p className="font-body text-lg text-primary-foreground/80 mt-4">
            With all my love, this Valentine's Day and always 💝
          </p>
        </motion.div>

        {/* Floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary-foreground/40"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                fontSize: 16 + i * 4,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            >
              ❤
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalSection;