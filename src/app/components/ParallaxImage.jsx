import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// OPTIMIZED: Replaced GSAP ScrollTrigger with Motion's useScroll + useTransform
// Benefits:
// - One shared scroll listener instead of per-component ScrollTrigger
// - CPU-optimized scroll-driven animations
// - Better cleanup and memory management
// - Uses transform only (GPU accelerated)

const ParallaxImage = ({ src, alt, speed = 0.5, className = '' }) => {
  const containerRef = useRef(null);
  
  // useScroll creates a single scroll listener that's shared across the app
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // useTransform maps scroll progress to the animation value
  // This is GPU-accelerated and doesn't cause layout thrashing
  const yTransform = useTransform(scrollYProgress, [0, 1], [speed * 50, -speed * 50]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: yTransform, willChange: 'transform' }}
      />
    </div>
  );
};
export default ParallaxImage;
