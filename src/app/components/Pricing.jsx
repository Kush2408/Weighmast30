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
        className="pricing-bg min-h-screen flex flex-col items-center justify-center py-24 px-4 relative">

            {/* Heading */}
            <motion.div
                className="text-center mb-20 relative z-10 "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Pricing
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] bg-clip-text text-transparent">
                    Simple plans for your Weighbridge
                </h1>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center relative z-10">

                {/* Starter */}
                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="group relative bg-white border border-gray-200 rounded-3xl p-8 w-full md:w-[360px] flex flex-col shadow-md overflow-hidden"
                >
                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#0F4C81]/40 transition duration-500" />

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
                            <motion.li
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-700 text-sm"
                            >
                                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-full"></div>
                                {feature}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Toggle */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-gray-500">Annual Plan</span>
                        <button
                            onClick={() => setStarterAnnual(!starterAnnual)}
                            className={`w-11 h-6 rounded-full relative transition ${starterAnnual ? "bg-gradient-to-r from-[#0F4C81] to-[#0F7173]" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${starterAnnual ? "translate-x-5" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    <button className="relative overflow-hidden w-full py-3 border-2 border-[#0F4C81] text-[#0F4C81] rounded-xl font-medium transition hover:text-white group">
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </motion.div>

                {/* Scale */}
                <motion.div
                    whileHover={{ y: -12, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative bg-gray-900 text-white rounded-3xl p-8 w-full md:w-[360px] flex flex-col shadow-2xl overflow-hidden"
                >
                    {/* Animated Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_6s_linear_infinite]" />

                    <div className="flex justify-between items-center mb-6">
                        <span className="px-4 py-1 bg-gray-800 rounded-lg text-sm font-medium">
                            Ultimate:
                        </span>
                        <span className="px-3 py-1 bg-[#0F7173]/20 text-[#0F7173] text-xs rounded-full">
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
                            <motion.li
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-sm"
                            >
                                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-full"></div>
                                {feature}
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm">Annual Plan</span>
                        <button
                            onClick={() => setScaleAnnual(!scaleAnnual)}
                            className={`w-11 h-6 rounded-full relative transition ${scaleAnnual ? "bg-gradient-to-r from-[#0F4C81] to-[#0F7173]" : "bg-white"
                                }`}
                        >
                            <div
                                className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${scaleAnnual ? "translate-x-5 bg-white" : "bg-gray-900"
                                    }`}
                            />
                        </button>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] rounded-xl font-medium hover:scale-105 transition">
                        Get Started
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default Pricing;