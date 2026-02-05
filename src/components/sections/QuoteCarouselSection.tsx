 import { motion, useInView, AnimatePresence } from "framer-motion";
 import { useRef, useState, useEffect } from "react";
 import { ChevronLeft, ChevronRight } from "lucide-react";
 
 const quotes = [
   {
     text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
     author: "Maya Angelou"
   },
   {
     text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
     author: "Gabriel García Márquez"
   },
   {
     text: "You are my sun, my moon, and all my stars.",
     author: "E.E. Cummings"
   },
   {
     text: "Whatever our souls are made of, his and mine are the same.",
     author: "Emily Brontë"
   },
   {
     text: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
     author: "J.R.R. Tolkien"
   },
 ];
 
 const QuoteCarouselSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
   const [currentIndex, setCurrentIndex] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentIndex((prev) => (prev + 1) % quotes.length);
     }, 6000);
     return () => clearInterval(interval);
   }, []);
 
   const goToPrevious = () => {
     setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
   };
 
   const goToNext = () => {
     setCurrentIndex((prev) => (prev + 1) % quotes.length);
   };
 
   return (
     <section
       ref={ref}
       className="relative py-24 px-6 overflow-hidden"
       style={{
         background: "linear-gradient(180deg, hsl(350 50% 12%) 0%, hsl(340 60% 8%) 100%)"
       }}
     >
       {/* Animated stars background */}
       <div className="absolute inset-0">
         {[...Array(50)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-primary-foreground/40 rounded-full"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
             animate={{
               opacity: [0.2, 0.8, 0.2],
               scale: [1, 1.5, 1],
             }}
             transition={{
               duration: 2 + Math.random() * 3,
               delay: Math.random() * 2,
               repeat: Infinity,
             }}
           />
         ))}
       </div>
 
       {/* Title */}
       <motion.div
         className="text-center mb-16"
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{ duration: 0.8 }}
       >
         <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-4">
           Words of Love
         </h2>
         <p className="font-body text-lg text-primary-foreground/70">
           Beautiful quotes that remind me of us 💫
         </p>
       </motion.div>
 
       {/* Quote Carousel */}
       <div className="relative max-w-4xl mx-auto">
         <AnimatePresence mode="wait">
           <motion.div
             key={currentIndex}
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -50 }}
             transition={{ duration: 0.5 }}
             className="text-center px-8 sm:px-16"
           >
             <motion.div
               className="relative inline-block"
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5 }}
             >
               <span className="absolute -top-8 -left-4 text-6xl text-primary/30 font-handwritten">"</span>
               <p className="font-elegant text-xl sm:text-2xl md:text-3xl text-primary-foreground leading-relaxed italic">
                 {quotes[currentIndex].text}
               </p>
               <span className="absolute -bottom-4 -right-4 text-6xl text-primary/30 font-handwritten">"</span>
             </motion.div>
             <motion.p
               className="mt-8 font-body text-lg text-accent"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
             >
               — {quotes[currentIndex].author}
             </motion.p>
           </motion.div>
         </AnimatePresence>
 
         {/* Navigation */}
         <button
           onClick={goToPrevious}
           className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors text-primary-foreground"
         >
           <ChevronLeft className="w-6 h-6" />
         </button>
         <button
           onClick={goToNext}
           className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors text-primary-foreground"
         >
           <ChevronRight className="w-6 h-6" />
         </button>
 
         {/* Dots indicator */}
         <div className="flex justify-center gap-2 mt-12">
           {quotes.map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentIndex(index)}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 index === currentIndex
                   ? "w-8 bg-accent"
                   : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
               }`}
             />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default QuoteCarouselSection;