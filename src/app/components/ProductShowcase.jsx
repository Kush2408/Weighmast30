import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Monitor, Smartphone, Globe, Shield } from 'lucide-react';
import loginScreenImage from './figma/login.webp'
import receiptSettingsImage from './figma/receiptsetting.webp';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  const features = [
    {
      icon: Monitor,
      title: 'Desktop & Web Access',
      description: 'Full-featured desktop application with cloud-based web access from anywhere.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Monitor operations and access reports on-the-go with mobile-responsive design.',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for multiple languages and regional settings for global operations.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Role-based access control, encryption, and comprehensive audit trails.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Modern Interface,
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              Powerful Performance
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Intuitive design meets enterprise-grade functionality. 
            Experience software that's both beautiful and powerful.
          </p>
        </motion.div>

        {/* Main Product Showcase */}
        <motion.div
          ref={containerRef}
          className="relative mb-20"
          style={{ scale, opacity }}
        >
          <div className="relative">
          {/* OPTIMIZED: Glow effect with reduced blur and longer animation
              - Reduced blur from 100px to 60px
              - Increased duration from 5s to 8s (less frequent repaints)
              - Reduced opacity range */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-red-500/15 blur-[60px] rounded-3xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ willChange: 'opacity' }}
            />

            {/* OPTIMIZED: Main Image with reduced backdrop blur
                - Reduced backdrop-blur from xl to md
                - Only scale animation (no 3D rotations) */}
            <motion.div
              className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
              style={{ willChange: 'transform' }}
            >
              <div className="p-8">
                <img
                  src={loginScreenImage}
                  alt="Weighmast Login Interface"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* OPTIMIZED: Floating Feature Card with reduced blur and shadow
                - Reduced backdrop-blur from xl to md
                - Reduced shadow from xl to lg */}
            <motion.div
              className="absolute -right-8 top-1/4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 p-6 max-w-xs hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, x: 5 }}
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Secure Login</h4>
                  <p className="text-sm text-gray-600">Multi-factor authentication and encrypted sessions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Image Showcase */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Customizable & Scalable
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Configure every aspect of your weighbridge software to match your 
              business requirements. Scale from single to multiple sites seamlessly.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Receipt Templates', 'Custom Reports', 'User Roles', 'API Access'].map((tag, index) => (
                <motion.div
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 text-sm font-semibold text-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl"
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={receiptSettingsImage}
              alt="Receipt Configuration"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
