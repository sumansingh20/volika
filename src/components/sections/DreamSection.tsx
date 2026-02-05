 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 
 const dreams = [
   { emoji: "🌅", text: "Watch countless sunsets together" },
   { emoji: "✈️", text: "Travel the world hand in hand" },
   { emoji: "🏠", text: "Build a home filled with love" },
   { emoji: "📚", text: "Create endless beautiful memories" },
   { emoji: "🌟", text: "Chase our dreams together" },
   { emoji: "💑", text: "Grow old with you by my side" },
 ];
 
 const DreamSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
 
   return (
     <section
       ref={ref}
       className="relative py-24 px-6 romantic-gradient overflow-hidden"
     >
       {/* Floating decorations */}
       <div className="absolute inset-0 pointer-events-none">
         {[...Array(12)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute text-2xl sm:text-3xl opacity-20"
             style={{
               left: `${5 + i * 8}%`,
               top: `${10 + (i % 4) * 25}%`,
             }}
             animate={{
               y: [0, -15, 0],
               rotate: [0, 10, -10, 0],
             }}
             transition={{
               duration: 4 + i * 0.3,
               delay: i * 0.2,
               repeat: Infinity,
             }}
           >
             {['✨', '💫', '🌸', '💖'][i % 4]}
           </motion.div>
         ))}
       </div>
 
       {/* Title */}
       <motion.div
         className="text-center mb-16"
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{ duration: 0.8 }}
       >
         <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
           Dreams With You
         </h2>
         <p className="font-body text-lg text-muted-foreground">
           A future I dream of sharing with you 🌙
         </p>
       </motion.div>
 
       {/* Dreams Grid */}
       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {dreams.map((dream, index) => (
           <motion.div
             key={index}
             className="group relative"
             initial={{ opacity: 0, y: 30, scale: 0.9 }}
             animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
             transition={{ duration: 0.6, delay: index * 0.1 }}
           >
             <motion.div
               className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
               whileHover={{ y: -5, scale: 1.02 }}
             >
               {/* Shimmer effect */}
               <motion.div
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                 initial={{ x: "-100%" }}
                 whileHover={{ x: "100%" }}
                 transition={{ duration: 0.6 }}
               />
               
               <div className="relative flex items-center gap-4">
                 <motion.span
                   className="text-4xl"
                   whileHover={{ scale: 1.3, rotate: 15 }}
                   transition={{ type: "spring", stiffness: 400 }}
                 >
                   {dream.emoji}
                 </motion.span>
                 <p className="font-elegant text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                   {dream.text}
                 </p>
               </div>
             </motion.div>
           </motion.div>
         ))}
       </div>
     </section>
   );
 };
 
 export default DreamSection;