import React, { useRef, useMemo } from 'react';
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

const UseCasesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  /* -------------------- */
  /*  Stable Color Map    */
  /* -------------------- */
  const colorMap = {
    blue: {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      dot: 'bg-blue-500',
      overlay: 'from-blue-500/5 to-blue-600/10'
    },
    purple: {
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      dot: 'bg-purple-500',
      overlay: 'from-purple-500/5 to-purple-600/10'
    },
    orange: {
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      dot: 'bg-orange-500',
      overlay: 'from-orange-500/5 to-orange-600/10'
    },
    green: {
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      dot: 'bg-green-500',
      overlay: 'from-green-500/5 to-green-600/10'
    },
    teal: {
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
      dot: 'bg-teal-500',
      overlay: 'from-teal-500/5 to-teal-600/10'
    },
    indigo: {
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      dot: 'bg-indigo-500',
      overlay: 'from-indigo-500/5 to-indigo-600/10'
    },
    red: {
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      dot: 'bg-red-500',
      overlay: 'from-red-500/5 to-red-600/10'
    },
    pink: {
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      dot: 'bg-pink-500',
      overlay: 'from-pink-500/5 to-pink-600/10'
    }
  };

  /* -------------------- */
  /*  Memoized Data       */
  /* -------------------- */
  const useCases = useMemo(() => [
    {
      icon: Factory,
      title: 'Manufacturing',
      description:
        'Track raw material intake and finished goods dispatch with precision. Maintain real-time inventory visibility.',
      color: 'blue',
      benefits: ['Material tracking', 'Quality control', 'Inventory sync']
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description:
        'Streamline freight weighing, load verification, and documentation for faster turnaround times.',
      color: 'purple',
      benefits: ['Load verification', 'Fast processing', 'Digital receipts']
    },
    {
      icon: Mountain,
      title: 'Mining & Quarries',
      description:
        'Manage high-volume material movements with automated weighing and dust-resistant hardware integration.',
      color: 'orange',
      benefits: ['High-volume handling', 'Harsh environment', 'Material classification']
    },
    {
      icon: Wheat,
      title: 'Agriculture',
      description:
        'Weigh grain, livestock, and agricultural products efficiently. Generate compliance reports instantly.',
      color: 'green',
      benefits: ['Crop weighing', 'Moisture tracking', 'Farm-to-market docs']
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description:
        'Track waste collection, recycling materials, and billing with automated weight-based charging.',
      color: 'teal',
      benefits: ['Waste tracking', 'Auto billing', 'Environmental reports']
    },
    {
      icon: Container,
      title: 'Ports & Shipping',
      description:
        'Handle container weighing (VGM), cargo verification, and customs documentation seamlessly.',
      color: 'indigo',
      benefits: ['VGM compliance', 'Container tracking', 'Customs integration']
    },
    {
      icon: Building2,
      title: 'Construction',
      description:
        'Monitor concrete, aggregates, and building material delivery with accurate weight records.',
      color: 'red',
      benefits: ['Material delivery', 'Project tracking', 'Supplier management']
    },
    {
      icon: PackageCheck,
      title: 'Distribution Centers',
      description:
        'Optimize inbound and outbound logistics with automated weighing and warehouse management integration.',
      color: 'pink',
      benefits: ['WMS integration', 'Cross-docking', 'Load optimization']
    }
  ], []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-24 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200/60 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Industry Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Built for Every
            <span className="block bg-gradient-to-r from-[#0F4C81] via-[#0F5F8A] to-[#0F7173] bg-clip-text text-transparent">
              Industry & Application
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Trusted by businesses across diverse industries for reliable,
            scalable weighbridge management solutions.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {useCases.map((useCase, index) => {
            const colors = colorMap[useCase.color];
            const Icon = useCase.icon;

            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.07 }}
              >
                <div className="group h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    <div className="space-y-1.5">
                      {useCase.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-700"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                          />
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= FEATURE SHOWCASE ================= */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left Content */}
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
                  desc: 'Configure data fields, receipt formats, and workflows to match your process.'
                },
                {
                  title: 'Multi-Location Support',
                  desc: 'Manage multiple weighbridges and sites from a centralized dashboard.'
                },
                {
                  title: 'Third-Party Integrations',
                  desc: 'Connect with ERP, WMS, accounting, and other business systems.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 bg-white/70 rounded-2xl border border-gray-200/50 hover:bg-white transition"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <img
                src={barcodeSettingsImage}
                alt="Barcode Configuration"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-64 rounded-2xl overflow-hidden border border-gray-200/60 shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <img
                src={cameraManagementImage}
                alt="Camera Management"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default UseCasesSection;