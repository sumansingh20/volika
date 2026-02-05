import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    title: "First Thought",
    description: "The moment you first crossed my mind — a quiet beginning to something beautiful.",
    emoji: "💭",
  },
  {
    title: "First Conversation",
    description: "Words exchanged, smiles shared — that's when I knew there was something different about you.",
    emoji: "💬",
  },
  {
    title: "Growing Feelings",
    description: "With every passing day, every little moment, my admiration for you grew deeper and stronger.",
    emoji: "🌱",
  },
  {
    title: "Today",
    description: "Here we are — and you've become someone who matters more than words could ever express.",
    emoji: "❤️",
  },
];

const TimelineItem = ({ event, index, isLast }: { event: typeof timelineEvents[0]; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        {/* Glowing dot */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-full bg-card border-4 border-primary flex items-center justify-center text-2xl shadow-lg"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-glow-pulse" />
          <span className="relative">{event.emoji}</span>
        </motion.div>
        
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-1 flex-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <motion.div
          className="card-romantic"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          <h3 className="font-elegant text-xl sm:text-2xl text-primary mb-2">
            {event.title}
          </h3>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-6 romantic-gradient overflow-hidden">
      {/* Title */}
      <motion.div
        ref={ref}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
          Our Story
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          A journey of the heart
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={index}
            event={event}
            index={index}
            isLast={index === timelineEvents.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;