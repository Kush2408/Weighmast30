import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Scale, 
  Camera, 
  FileText, 
  BarChart3, 
  Shield, 
  Smartphone,
  Truck,
  Database,
  Zap,
  Clock,
  CheckCircle2,
  Lock
} from 'lucide-react';
import vehicleManagementImage from './figma/vehiclemaster.webp';
import transactionViewImage from './figma/completetransactionlist.webp';
import userManagementImage from './figma/usermanagementadd.webp';

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Scale,
      title: 'Automated Weighing',
      description: 'Seamlessly capture weight data from any weighbridge with automated integration. Eliminate manual data entry and reduce human error.',
      color: 'blue',
      // image: transactionViewImage,
    },
    {
      icon: Truck,
      title: 'Vehicle Management',
      description: 'Complete vehicle tracking with tare weight management, driver information, and automatic vehicle recognition for faster processing.',
      color: 'purple',
      // image: vehicleManagementImage,
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Built-in security measures including CCTV integration, QR code verification, and audit trails to prevent weighing fraud.',
      color: 'red',
      // image: userManagementImage,
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards with live transaction monitoring, weight trends, and operational insights at your fingertips.',
      color: 'green',
      // image: transactionViewImage,
    },
    {
      icon: FileText,
      title: 'Smart Reporting',
      description: 'Generate detailed reports with customizable templates. Export to PDF, Excel, or integrate with your existing systems.',
      color: 'orange',
      // image: vehicleManagementImage,
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Centralized database for all weighing records with powerful search, filtering, and data export capabilities.',
      color: 'indigo',
      // image: userManagementImage,
    },
  ];

  const additionalFeatures = [
    { icon: Camera, text: 'CCTV Integration' },
    { icon: Smartphone, text: 'Mobile App Access' },
    { icon: Zap, text: 'Fast Processing' },
    { icon: Clock, text: 'Shift Management' },
    { icon: CheckCircle2, text: 'Quality Checks' },
    { icon: Lock, text: 'Role-Based Access' },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0F4C81]/10 to-[#0F7173]/10 backdrop-blur-sm rounded-full border border-[#0F4C81]/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Powerful Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything You Need for
            <span className="block bg-gradient-to-r from-[#0F4C81] via-[#0F5F8A] to-[#0F7173] bg-clip-text text-transparent">
              Efficient Weighing
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Comprehensive weighbridge management software with advanced features 
            designed to streamline operations and maximize productivity.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-600/20 flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>


                {/* Hover arrow */}
                <motion.div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-${feature.color}-100 flex items-center justify-center`}>
                    <svg className={`w-4 h-4 text-${feature.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-3xl border border-gray-200/60 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Plus Many More Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {additionalFeatures.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-gray-200/40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
