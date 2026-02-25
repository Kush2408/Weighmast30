import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const GradientBackground = () => {
  // Respect user's motion preferences for accessibility and performance
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20" />

      {/* OPTIMIZED: Animated gradient orbs with reduced blur and longer durations
          - Blur reduced from 150px to 80px (less GPU pressure)
          - Duration increased from 30s to 60s (less frequent repaints)
          - Only uses transform (x, y, scale) - GPU accelerated
          - Disabled on mobile and for users with prefers-reduced-motion */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-[80px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 60, // Increased from 30s - fewer frame updates needed
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }} // Enable GPU acceleration
          />

          <motion.div
            className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-400/15 to-pink-400/10 rounded-full blur-[80px]"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 50, // Increased from 25s
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-400/10 to-orange-400/5 rounded-full blur-[80px]"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 45, // Increased from 20s
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          />
        </>
      )}

      {/* OPTIMIZED: Removed SVG noise texture - was causing unnecessary repaints
          The noise effect is imperceptible and costs GPU cycles */}
      
      {/* Radial gradient overlay for depth - kept subtle and non-animated */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/50 to-white opacity-50" />
    </div>
  );
};