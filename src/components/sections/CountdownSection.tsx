 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import CountdownTimer from "../CountdownTimer";
 
 const CountdownSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
 
   return (
     <section 
       ref={ref}
       className="relative py-20 px-6 overflow-hidden"
       style={{
         background: "linear-gradient(135deg, hsl(350 60% 97%) 0%, hsl(20 50% 96%) 50%, hsl(350 50% 98%) 100%)"
       }}
     >
       {/* Decorative elements */}
       <motion.div
         className="absolute top-10 left-10 text-6xl opacity-20"
         animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
         transition={{ duration: 5, repeat: Infinity }}
       >
         💕
       </motion.div>
       <motion.div
         className="absolute bottom-10 right-10 text-6xl opacity-20"
         animate={{ rotate: [0, -10, 10, 0], y: [0, 10, 0] }}
         transition={{ duration: 4, repeat: Infinity }}
       >
         💗
       </motion.div>
       <motion.div
         className="absolute top-1/2 left-5 text-4xl opacity-15"
         animate={{ scale: [1, 1.2, 1] }}
         transition={{ duration: 3, repeat: Infinity }}
       >
         ✨
       </motion.div>
       <motion.div
         className="absolute top-1/3 right-8 text-4xl opacity-15"
         animate={{ scale: [1, 1.3, 1] }}
         transition={{ duration: 2.5, repeat: Infinity }}
       >
         ⭐
       </motion.div>
 
       {/* Title */}
       <motion.div
         className="text-center mb-8"
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{ duration: 0.8 }}
       >
         <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
           Every Second Counts
         </h2>
         <p className="font-body text-lg text-muted-foreground">
           Because every moment with you is precious 💖
         </p>
       </motion.div>
 
       {/* Countdown Timer */}
       <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.8, delay: 0.3 }}
       >
         <CountdownTimer />
       </motion.div>
 
       {/* Bottom decorative line */}
       <motion.div
         className="flex items-center justify-center gap-4 mt-12"
         initial={{ opacity: 0 }}
         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
         transition={{ duration: 1, delay: 0.6 }}
       >
         <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-primary/30" />
         <motion.span
           className="text-2xl"
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           💝
         </motion.span>
         <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-primary/30" />
       </motion.div>
     </section>
   );
 };
 
 export default CountdownSection;