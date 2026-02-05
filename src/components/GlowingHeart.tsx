import { motion } from "framer-motion";

interface GlowingHeartProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const GlowingHeart = ({ size = "lg", className = "" }: GlowingHeartProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.1, 1, 1.15, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glow layers */}
      <motion.div
         className="absolute inset-[-20%] rounded-full bg-primary/40 blur-2xl"
        animate={{
           scale: [1, 1.4, 1],
           opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
         className="absolute inset-[-40%] rounded-full bg-primary/20 blur-3xl"
        animate={{
           scale: [1.3, 1.7, 1.3],
           opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
       {/* Extra sparkle glow */}
       <motion.div
         className="absolute inset-[-10%] rounded-full"
         style={{
           background: "radial-gradient(circle, hsl(45 80% 60% / 0.3) 0%, transparent 70%)"
         }}
         animate={{
           scale: [1, 1.2, 1],
           opacity: [0.5, 0.8, 0.5],
         }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           ease: "easeInOut",
           delay: 0.4,
         }}
       />
      {/* Heart */}
       <motion.div 
         className="absolute inset-0 flex items-center justify-center text-primary"
         style={{
           filter: "drop-shadow(0 0 20px hsl(350 80% 50% / 0.6))"
         }}
       >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
           <defs>
             <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="hsl(350 80% 60%)" />
               <stop offset="50%" stopColor="hsl(350 80% 50%)" />
               <stop offset="100%" stopColor="hsl(340 70% 45%)" />
             </linearGradient>
           </defs>
           <path 
             d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
             fill="url(#heartGradient)"
           />
        </svg>
       </motion.div>
    </motion.div>
  );
};

export default GlowingHeart;