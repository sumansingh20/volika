import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText = ({ text, className = "", delay = 0 }: TypewriterTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.08,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypewriterText;