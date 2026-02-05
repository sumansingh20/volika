import { motion } from "framer-motion";
import GlowingHeart from "../GlowingHeart";
import Sparkles from "../Sparkles";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/70" />
      </div>

       <Sparkles count={60} />
 
       {/* Animated background orbs */}
       <motion.div
         className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
         style={{ top: "10%", left: "10%" }}
         animate={{
           scale: [1, 1.3, 1],
           opacity: [0.3, 0.5, 0.3],
           x: [0, 50, 0],
           y: [0, 30, 0],
         }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute w-80 h-80 rounded-full bg-accent/10 blur-3xl"
         style={{ bottom: "20%", right: "10%" }}
         animate={{
           scale: [1.2, 1, 1.2],
           opacity: [0.2, 0.4, 0.2],
           x: [0, -40, 0],
           y: [0, -20, 0],
         }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Glowing Heart */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <GlowingHeart size="xl" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
           className="font-handwritten text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6"
           style={{
             textShadow: "0 0 40px hsl(350 80% 60% / 0.6), 0 0 80px hsl(350 80% 60% / 0.4), 0 0 120px hsl(350 80% 60% / 0.2)"
           }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Happy Valentine's Day, Volika ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
           className="font-elegant text-xl sm:text-2xl md:text-3xl text-foreground/90 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          "This little universe is created only for you."
        </motion.p>
 
         {/* Decorative hearts */}
         <motion.div
           className="absolute top-20 left-10 text-4xl opacity-40"
           animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
           transition={{ duration: 4, repeat: Infinity }}
         >
           💕
         </motion.div>
         <motion.div
           className="absolute top-32 right-12 text-3xl opacity-30"
           animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
           transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
         >
           💗
         </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { delay: 2, duration: 2, repeat: Infinity },
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
           <p className="mt-2 text-xs text-muted-foreground font-body">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;