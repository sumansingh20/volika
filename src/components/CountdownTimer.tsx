 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 
 const CountdownTimer = () => {
   const [timeLeft, setTimeLeft] = useState({
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
   });
   const [currentDate, setCurrentDate] = useState(new Date());
   const [isValentinesDay, setIsValentinesDay] = useState(false);
 
   useEffect(() => {
     const calculateTimeLeft = () => {
       const now = new Date();
       setCurrentDate(now);
       
       const currentYear = now.getFullYear();
       let valentinesDay = new Date(currentYear, 1, 14); // February 14
       
       // If Valentine's Day has passed this year, use next year
       if (now > valentinesDay) {
         valentinesDay = new Date(currentYear + 1, 1, 14);
       }
       
       const difference = valentinesDay.getTime() - now.getTime();
       
       // Check if it's Valentine's Day
       if (now.getMonth() === 1 && now.getDate() === 14) {
         setIsValentinesDay(true);
         return;
       }
       
       setIsValentinesDay(false);
       
       if (difference > 0) {
         setTimeLeft({
           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
           minutes: Math.floor((difference / 1000 / 60) % 60),
           seconds: Math.floor((difference / 1000) % 60),
         });
       }
     };
 
     calculateTimeLeft();
     const timer = setInterval(calculateTimeLeft, 1000);
 
     return () => clearInterval(timer);
   }, []);
 
   const formatDate = (date: Date) => {
     return date.toLocaleDateString('en-US', {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric'
     });
   };
 
   const formatTime = (date: Date) => {
     return date.toLocaleTimeString('en-US', {
       hour: '2-digit',
       minute: '2-digit',
       second: '2-digit'
     });
   };
 
   const TimeBlock = ({ value, label }: { value: number; label: string }) => (
     <motion.div
       className="flex flex-col items-center"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
     >
       <motion.div
         className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-card/80 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg overflow-hidden"
         whileHover={{ scale: 1.05 }}
       >
         {/* Shimmer effect */}
         <motion.div
           className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
           animate={{ x: ["-100%", "100%"] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         />
         <motion.span
           key={value}
           className="font-handwritten text-3xl sm:text-4xl md:text-5xl text-primary"
           initial={{ scale: 1.2, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.3 }}
         >
           {value.toString().padStart(2, '0')}
         </motion.span>
       </motion.div>
       <span className="mt-2 text-xs sm:text-sm text-muted-foreground font-body uppercase tracking-wider">
         {label}
       </span>
     </motion.div>
   );
 
   return (
     <div className="py-12 px-4">
       {/* Current Date & Time Display */}
       <motion.div
         className="text-center mb-8"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
       >
         <p className="font-elegant text-lg sm:text-xl text-muted-foreground">
           {formatDate(currentDate)}
         </p>
         <motion.p
           key={currentDate.getSeconds()}
           className="font-handwritten text-2xl sm:text-3xl text-primary mt-1"
           initial={{ opacity: 0.5 }}
           animate={{ opacity: 1 }}
         >
           {formatTime(currentDate)}
         </motion.p>
       </motion.div>
 
       {isValentinesDay ? (
         <motion.div
           className="text-center"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", damping: 10 }}
         >
           <motion.p
             className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary text-shadow-glow"
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             🎉 It's Valentine's Day! 🎉
           </motion.p>
           <p className="font-elegant text-xl text-foreground/80 mt-4">
             Today is our special day, Volika! 💖
           </p>
         </motion.div>
       ) : (
         <div>
           <motion.p
             className="text-center font-elegant text-lg sm:text-xl text-muted-foreground mb-6"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
           >
             Countdown to Valentine's Day 💝
           </motion.p>
           <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
             <TimeBlock value={timeLeft.days} label="Days" />
             <span className="font-handwritten text-3xl text-primary/50 mt-[-20px]">:</span>
             <TimeBlock value={timeLeft.hours} label="Hours" />
             <span className="font-handwritten text-3xl text-primary/50 mt-[-20px]">:</span>
             <TimeBlock value={timeLeft.minutes} label="Minutes" />
             <span className="font-handwritten text-3xl text-primary/50 mt-[-20px]">:</span>
             <TimeBlock value={timeLeft.seconds} label="Seconds" />
           </div>
         </div>
       )}
     </div>
   );
 };
 
 export default CountdownTimer;