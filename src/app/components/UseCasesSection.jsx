import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Factory, 
  Truck, 
  Mountain, 
  Wheat,
  Container,
  Recycle,
  Building2,
  PackageCheck,
  Zap
} from 'lucide-react';
import cameraManagementImage from './figma/cameramaster.webp';
import barcodeSettingsImage from './figma/barcode.webp';

export const UseCasesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const useCases = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Track raw material intake and finished goods dispatch with precision. Maintain real-time inventory visibility.',
      color: 'blue',
      benefits: ['Material tracking', 'Quality control', 'Inventory sync'],
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Streamline freight weighing, load verification, and documentation for faster turnaround times.',
      color: 'purple',
      benefits: ['Load verification', 'Fast processing', 'Digital receipts'],
    },
    {
      icon: Mountain,
      title: 'Mining & Quarries',
      description: 'Manage high-volume material movements with automated weighing and dust-resistant hardware integration.',
      color: 'orange',
      benefits: ['High-volume handling', 'Harsh environment', 'Material classification'],
    },
    {
      icon: Wheat,
      title: 'Agriculture',
      description: 'Weigh grain, livestock, and agricultural products efficiently. Generate compliance reports instantly.',
      color: 'green',
      benefits: ['Crop weighing', 'Moisture tracking', 'Farm-to-market docs'],
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Track waste collection, recycling materials, and billing with automated weight-based charging.',
      color: 'teal',
      benefits: ['Waste tracking', 'Auto billing', 'Environmental reports'],
    },
    {
      icon: Container,
      title: 'Ports & Shipping',
      description: 'Handle container weighing (VGM), cargo verification, and customs documentation seamlessly.',
      color: 'indigo',
      benefits: ['VGM compliance', 'Container tracking', 'Customs integration'],
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Monitor concrete, aggregates, and building material delivery with accurate weight records.',
      color: 'red',
      benefits: ['Material delivery', 'Project tracking', 'Supplier management'],
    },
    {
      icon: PackageCheck,
      title: 'Distribution Centers',
      description: 'Optimize inbound and outbound logistics with automated weighing and warehouse management integration.',
      color: 'pink',
      benefits: ['WMS integration', 'Cross-docking', 'Load optimization'],
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Industry Solutions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Built for Every
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              Industry & Application
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Trusted by businesses across diverse industries for reliable, 
            scalable weighbridge management solutions.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="group h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${useCase.color}-500/5 to-${useCase.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-${useCase.color}-500/10 to-${useCase.color}-600/20 flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <useCase.icon className={`w-6 h-6 text-${useCase.color}-600`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${useCase.color}-500`} />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase with Images */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Flexible Configuration for Any Workflow
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Weighmast adapts to your unique operational requirements with 
              customizable workflows, fields, and integrations.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Custom Fields & Templates',
                  desc: 'Configure data fields, receipt formats, and workflows to match your process.',
                },
                {
                  title: 'Multi-Location Support',
                  desc: 'Manage multiple weighbridges and sites from a centralized dashboard.',
                },
                {
                  title: 'Third-Party Integrations',
                  desc: 'Connect with ERP, WMS, accounting, and other business systems.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-gray-200/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="order-1 lg:order-2 relative">
            {/* OPTIMIZED: Images with reduced shadow
                - Reduced shadow from shadow-2xl to shadow-lg
                - Removed 3D rotation (rotateY) - use only scale */}
            <motion.div
              className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ willChange: 'transform' }}
            >
              <img
                src={barcodeSettingsImage}
                alt="Barcode Configuration"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            {/* OPTIMIZED: Floating secondary image with reduced shadow
                - Reduced shadow from xl to lg
                - Removed rotation animation */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-64 rounded-2xl overflow-hidden border border-gray-200/60 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform' }}
            >
              <img
                src={cameraManagementImage}
                alt="Camera Management"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
