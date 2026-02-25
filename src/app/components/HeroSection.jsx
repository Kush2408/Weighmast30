import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import dashboardVideo from "./figma/dashboardanimated_P.mov";

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
 const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* OPTIMIZED: Animated gradient orbs with reduced blur and longer durations
      - Blur reduced from 120px/100px/90px to 60px (reduces GPU pressure)
      - Durations increased significantly (less frequent repaints)
      - Only uses transform (GPU accelerated) */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[60px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 50, // Increased from 25s
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[60px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 45, // Increased from 20s
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-red-400/10 rounded-full blur-[60px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40, // Increased from 18s
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ willChange: 'transform' }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-20 pb-24 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0F4C81]/10 to-[#0F7173]/10 backdrop-blur-sm rounded-full border border-[#0F4C81]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Zap className="w-4 h-4 text-[#0F4C81]" />
              <span className="text-sm font-medium text-gray-700">
                Enterprise-Grade Weighbridge Management
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block bg-gradient-to-r from-[#0F4C81] via-[#0F5F8A] to-[#0F7173] bg-clip-text text-transparent font-bold">
                  Advanced Weighbridge Software
                </span>
                <span className="block text-gray-900 font-bold">
                  for High-Precision Industrial Data
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Stop relying on manual ticketing. Our enterprise-grade Weighbridge Software provides a secure "Intelligence Layer" for your weighing operations, ensuring 100% data integrity and real-time visibility across all sites.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { icon: Shield, text: 'Fraud Prevention', color: 'blue' },
                { icon: BarChart3, text: 'Real-Time Analytics', color: 'purple' },
                { icon: CheckCircle2, text: 'Automated Reporting', color: 'green' },
                { icon: Shield, text: 'Universal hardware support', color: 'gray' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 0.1)' }}
                >
                  <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold cursor-pointer">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full border border-gray-300/60 hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md font-semibold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo Video
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center gap-8 pt-8 border-t border-gray-200/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">Active Sites</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime SLA</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview with Premium Effects */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#0F4C81]/25 to-[#0F7173]/25 blur-[50px] rounded-3xl"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ willChange: 'opacity' }}
              />

              <motion.div
                className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden mb-30"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'transform' }}
              >
                <div>
                  <motion.video
                    src={dashboardVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 p-4 md:p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ willChange: 'opacity' }}
              >
                <div className="text-sm text-gray-600 font-medium">Today's Volume</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">4,847 <span className="text-lg text-gray-600">tons</span></div>
                <div className="text-xs text-green-600 font-medium mt-1">↑ 12% vs yesterday</div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-md rounded-2xl shadow-lg border border-green-200/60 p-4 md:p-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                style={{ willChange: 'opacity' }}
              >
                <div className="text-sm text-gray-600 font-medium">Efficiency Gain</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F4C81] to-[#0F7173] bg-clip-text text-transparent mt-1">+32%</div>
                <div className="text-xs text-gray-600 font-medium mt-1">This month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{ willChange: 'opacity' }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
