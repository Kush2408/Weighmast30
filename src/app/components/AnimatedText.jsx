import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// OPTIMIZED: Removed GSAP ScrollTrigger
// Using Motion's useInView instead for:
// - No ScrollTrigger instances (reduces main thread work)
// - Simpler DOM queries
// - Better cleanup and memory management
// - Native Framer Motion viewport detection

export const AnimatedText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: '-50px' });

  // Character animation only happens once on scroll into view
  // Stagger is handled by Framer Motion's built-in system

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        className="char inline-block"
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: delay + index * 0.02, // Stagger handled by Motion
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ 
          transformOrigin: '0% 100%',
          transformStyle: 'preserve-3d', // For 3D transforms
          willChange: 'transform, opacity' // GPU acceleration
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <div ref={textRef} className={className}>
      {typeof children === 'string' ? splitText(children) : children}
    </div>
  );
};

export const FadeInUp = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
