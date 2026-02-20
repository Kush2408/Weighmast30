import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxImage = ({ src, alt, speed = 0.5, className = '' }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};
