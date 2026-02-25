import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.10,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const letters = text.split("");

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: index * duration,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}