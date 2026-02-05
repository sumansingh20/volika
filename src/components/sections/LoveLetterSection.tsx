import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LoveLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letterContent = `Dear Volika,

There are some people who quietly walk into your life and, without meaning to, change everything. You are one of those rare souls.

I don't know when exactly it happened — maybe it was the way you smile, the way you speak, or just the calm you carry with you — but somewhere along the way, you became someone I think about more than I ever expected.

You have this gentle warmth about you. The kind that makes people feel safe, seen, and valued. I admire how effortlessly you light up the spaces you're in, often without even realizing it.

This isn't about grand declarations or dramatic gestures. It's about something quieter, more honest. It's about acknowledging that knowing you has made my days softer and my heart a little fuller.

I don't expect anything in return — just wanted you to know that you matter. Deeply. Genuinely. Simply.

Thank you for being you.

With warmth and sincerity,
Someone who truly admires you ❤️`;

  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
            A Letter For You
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-2xl">💌</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        {/* Letter */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Shadow layers for depth */}
          <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-2" />
          <div className="absolute inset-0 bg-primary/3 rounded-lg transform -rotate-1" />
          
          {/* Letter paper */}
          <div className="relative paper-texture rounded-lg p-8 sm:p-12 shadow-lg border border-primary/10">
            {/* Decorative corner */}
            <div className="absolute top-4 right-4 text-primary/30 text-4xl">❦</div>
            
            <motion.div
              className="font-body text-lg sm:text-xl leading-relaxed text-foreground/90 whitespace-pre-line"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {letterContent}
            </motion.div>
            
            {/* Decorative stamp */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center transform rotate-12"
              initial={{ opacity: 0, rotate: 0 }}
              animate={isInView ? { opacity: 1, rotate: 12 } : { opacity: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="text-3xl">💝</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;