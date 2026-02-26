import React, { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [starterAnnual, setStarterAnnual] = useState(false);
  const [scaleAnnual, setScaleAnnual] = useState(false);

  const starterFeatures = [
    "Weighbridge Software",
    "Dashboard",
    "Camera Plug-in",
    "Multi Weighbridge Integration",
    "Email Plug-in",
    "Barcode Plug-in",
    "Auto Backup"
  ];

  const scaleFeatures = [
    "Weighbridge Software",
    "Dashboard",
    "Camera Plug-in",
    "Multi Weighbridge Integration",
    "Email Plug-in",
    "Barcode Plug-in",
    "Auto Backup",
    "Cloud Integration",
    "ERP Integration",
    "Custom Reports"
  ];

  return (
    <div
      id="pricing"
      className="pricing-bg min-h-screen flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-24 relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#0F4C81]/10 to-[#0F7173]/10 text-[#0F4C81] rounded-full">
          ✨ Pricing
        </span>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
          Simple, transparent plans
          <span className="block bg-gradient-to-r from-[#0F4C81] to-[#0F7173] bg-clip-text text-transparent">
            for your Weighbridge
          </span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          Choose the perfect plan to manage your weighbridge operations efficiently and scale with confidence.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center relative z-10">

        {/* Starter Card */}
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative bg-white border border-gray-200 rounded-3xl p-8 w-full md:w-[360px] flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden will-change-transform"
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#0F4C81]/40 transition-colors duration-300 pointer-events-none" />

          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium mb-6">
            Enterprise
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ₹{starterAnnual ? "18,000" : "1,800"}
            <span className="text-base font-medium text-gray-500">
              {starterAnnual ? "/year" : "/month"}
            </span>
          </h2>

          <ul className="space-y-4 mb-8 flex-grow">
            {starterFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700 text-sm"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>

          {/* Toggle */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-500">Annual Plan</span>
            <button
              onClick={() => setStarterAnnual(!starterAnnual)}
              className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                starterAnnual
                  ? "bg-gradient-to-r from-[#0F4C81] to-[#0F7173]"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  starterAnnual ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <button className="relative overflow-hidden w-full py-3 border-2 border-[#0F4C81] text-[#0F4C81] rounded-xl font-medium transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-[#0F4C81] hover:to-[#0F7173]">
            Get Started
          </button>
        </motion.div>

        {/* Scale Card */}
        <motion.div
          whileHover={{ y: -10, scale: 1.025 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-gray-900 text-white rounded-3xl p-8 w-full md:w-[360px] flex flex-col shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden will-change-transform"
        >
          {/* Optimized Shine Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-linear" />
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="px-4 py-1 bg-gray-800 rounded-lg text-sm font-medium">
              Ultimate
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] text-gray-300 text-xs rounded-full">
              Most Popular
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            ₹{scaleAnnual ? "72,000" : "6,000"}
            <span className="text-base font-medium">
              {scaleAnnual ? "/year" : "/month"}
            </span>
          </h2>

          <ul className="space-y-4 mb-8 flex-grow">
            {scaleFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mb-6">
            <span className="text-sm">Annual Plan</span>
            <button
              onClick={() => setScaleAnnual(!scaleAnnual)}
              className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                scaleAnnual
                  ? "bg-gradient-to-r from-[#0F4C81] to-[#0F7173]"
                  : "bg-white"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                  scaleAnnual
                    ? "translate-x-5 bg-white"
                    : "bg-gray-900"
                }`}
              />
            </button>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-xl font-medium transition duration-300 hover:scale-[1.03]">
            Get Started
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Pricing;