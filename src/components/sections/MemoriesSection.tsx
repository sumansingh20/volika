import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";

const memories = [
  {
    image: memory1,
    caption: "Moments that mean more than words",
  },
  {
    image: memory2,
    caption: "Every memory with you is a treasure",
  },
];

const MemoryCard = ({ memory, index }: { memory: typeof memories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Heart-shaped border effect */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 z-10 rounded-3xl" />
        <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
        
        {/* Image container */}
        <div className="relative overflow-hidden rounded-3xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
          <motion.img
            src={memory.image}
            alt={memory.caption}
            className="w-full h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6">
            <p className="font-elegant text-lg sm:text-xl text-primary-foreground text-center italic">
              "{memory.caption}"
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating heart */}
      <motion.div
        className="absolute -top-3 -right-3 text-3xl"
        animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ❤️
      </motion.div>
    </motion.div>
  );
};

const MemoriesSection = () => {
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
          Precious Moments
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          Feelings captured in frames of the heart
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MemoriesSection;