import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoImage from './figma/WeighMAST.webp';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // OPTIMIZED: Debounced scroll listener with RAF
    let rafId = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Cancel previous RAF if pending
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const newIsScrolled = currentScrollY > 50;

        // Only update state if scroll threshold changes
        if ((newIsScrolled && !isScrolled) || (!newIsScrolled && isScrolled)) {
          setIsScrolled(newIsScrolled);
        }
        lastScrollY = currentScrollY;
      });
    };

    // OPTIMIZATION: Use passive listener to not block scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isScrolled]);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Solutions', href: '#solutions' },
  ];

  return (
    <div className="flex items-center justify-between h-20 relative">
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-10xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="#"
                className="flex items-center group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src={logoImage}
                  alt="Weighmast"
                  className="h-8 w-auto transition-all duration-300 group-hover:brightness-110"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-14 ml-24 space-between justify-center translate-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#demo"
                className={`px-6 py-4 rounded-[50px] font-semibold text-sm uppercase tracking-[1.5px] transition-all duration-500 
                ${isScrolled
                    ? 'bg-sky-100 text-sky-800 shadow-[0_0_8px_rgba(0,0,0,0.05)] hover:bg-sky-600 hover:text-white hover:shadow-[0_7px_29px_rgb(93,24,220)]'
                    : 'bg-white text-gray-900 shadow-[0_0_8px_rgba(0,0,0,0.05)] hover:bg-purple-600 hover:text-white hover:shadow-[0_7px_29px_rgb(93,24,220)]'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 font-semibold"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.45)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.div
          className="absolute top-20 right-4 left-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-gray-200/50"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
            scale: isMobileMenuOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <a
              href="#demo"
              className="block py-3 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Demo
            </a>
            <a
              href="#contact"
              className="block py-3 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white rounded-full text-center hover:shadow-lg transition-all duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
