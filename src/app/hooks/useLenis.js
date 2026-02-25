import { useEffect } from 'react';
import Lenis from 'lenis';

// OPTIMIZED: Lenis configuration for performance
// Lenis is a smooth scroll library that can impact performance if not configured properly
// Key optimizations:
// 1. Reduced duration from 1s to 0.6s - feels smooth but uses less CPU cycles
// 2. Added RAF limit to prevent excessive updates on high-refresh displays
// 3. Disabled easing on fast scrolls to reduce computational load

export const useLenis = () => {
  useEffect(() => {
    // OPTIMIZED: More aggressive duration and configuration
    const lenis = new Lenis({
      duration: 0.6, // Reduced from 1 - still feels smooth, reduces CPU
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.8, // Reduced scroll multiplier for more control
      touchMultiplier: 1.0,
    });

    let rafId = null;
    let lastTime = performance.now();

    function raf(time) {
      // OPTIMIZATION: Throttle RAF updates on very high refresh rate displays
      const deltaTime = time - lastTime;
      
      // Only update if at least 8ms has passed (allows ~120fps on 144hz displays)
      if (deltaTime > 8) {
        lenis.raf(time);
        lastTime = time;
      }
      
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);
};
