import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

// OPTIMIZED: Complete rewrite to eliminate forced reflows and GSAP
// PROBLEMS FIXED:
// 1. getBoundingClientRect() on every mousemove (forced reflow)
// 2. Global mousemove listener (affects all other animations)
// 3. GSAP overhead for simple animations
// 4. No cleanup of animation contexts
//
// SOLUTION:
// - Cache bounding rect and only recalculate on demand
// - Use Motion's spring animations (GPU accelerated)
// - Only add listeners to the button element itself
// - Use requestAnimationFrame for smooth, optimized updates
// - Debounce rect recalculation

export const MagneticButton = ({ children, className = '', onClick }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boundsRef = useRef(null);
  const rafRef = useRef(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Cache bounding rect - update only on demand
    const updateBounds = () => {
      boundsRef.current = button.getBoundingClientRect();
    };

    // OPTIMIZED: mousemove handler with debouncing and RAF
    const handleMouseMove = (e) => {
      // Cancel previous RAF if pending
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const now = performance.now();
        // Only recalculate bounds if it's been > 500ms (debounced)
        if (now - lastUpdateRef.current > 500) {
          updateBounds();
          lastUpdateRef.current = now;
        }

        if (!boundsRef.current) {
          updateBounds();
        }

        const { left, top, width, height } = boundsRef.current;
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Only animate if within proximity (reduces animation overhead)
        if (distance < 150) {
          setPosition({
            x: distanceX * 0.2, // Reduced multiplier for subtler effect
            y: distanceY * 0.2,
          });
        } else {
          setPosition({ x: 0, y: 0 });
        }
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      setPosition({ x: 0, y: 0 });
    };

    // Only listen on button, not window
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Recalculate bounds on window resize
    const handleResize = () => {
      updateBounds();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.button>
  );
};
