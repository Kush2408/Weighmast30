import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  Lock,
} from "lucide-react";

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Static color mapping (prevents Tailwind purge issues)
  const colorStyles = {
    blue: {
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      arrowBg: "bg-blue-100",
      arrowText: "text-blue-600",
    },
    purple: {
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      arrowBg: "bg-purple-100",
      arrowText: "text-purple-600",
    },
    red: {
      iconBg: "bg-red-50",
      iconText: "text-red-600",
      arrowBg: "bg-red-100",
      arrowText: "text-red-600",
    },
    green: {
      iconBg: "bg-green-50",
      iconText: "text-green-600",
      arrowBg: "bg-green-100",
      arrowText: "text-green-600",
    },
    orange: {
      iconBg: "bg-orange-50",
      iconText: "text-orange-600",
      arrowBg: "bg-orange-100",
      arrowText: "text-orange-600",
    },
    indigo: {
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
      arrowBg: "bg-indigo-100",
      arrowText: "text-indigo-600",
    },
  };

  const features = [
    {
      icon: Scale,
      title: "Automated Weighing",
      description:
        "Seamlessly capture weight data from any weighbridge with automated integration. Eliminate manual data entry and reduce human error.",
      color: "blue",
    },
    {
      icon: Truck,
      title: "Vehicle Management",
      description:
        "Complete vehicle tracking with tare weight management, driver information, and automatic vehicle recognition for faster processing.",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description:
        "Built-in security measures including CCTV integration, QR code verification, and audit trails to prevent weighing fraud.",
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Comprehensive dashboards with live transaction monitoring, weight trends, and operational insights at your fingertips.",
      color: "green",
    },
    {
      icon: FileText,
      title: "Smart Reporting",
      description:
        "Generate detailed reports with customizable templates. Export to PDF, Excel, or integrate with your existing systems.",
      color: "orange",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Centralized database for all weighing records with powerful search, filtering, and data export capabilities.",
      color: "indigo",
    },
  ];

  const additionalFeatures = [
    { icon: Camera, text: "CCTV Integration" },
    { icon: Smartphone, text: "Mobile App Access" },
    { icon: Zap, text: "Fast Processing" },
    { icon: Clock, text: "Shift Management" },
    { icon: CheckCircle2, text: "Quality Checks" },
    { icon: Lock, text: "Role-Based Access" },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0F4C81]/10 to-[#0F7173]/10 rounded-full border border-[#0F4C81]/20 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything You Need for
            <span className="block bg-gradient-to-r from-[#0F4C81] to-[#0F7173] bg-clip-text text-transparent">
              Efficient Weighing
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Comprehensive weighbridge management software designed to
            streamline operations and maximize productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => {
            const styles = colorStyles[feature.color];
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group h-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className={`w-7 h-7 ${styles.iconText}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-8 h-8 rounded-full ${styles.arrowBg} flex items-center justify-center`}
                    >
                      <svg
                        className={`w-4 h-4 ${styles.arrowText}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Plus Many More Features
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {additionalFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturesSection;