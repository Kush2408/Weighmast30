import React, { useRef, useEffect } from "react";
import { ArrowRight, Shield, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import dashboardVideo from "./figma/dashboardanimated_P.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  // Prevent video from blocking main thread on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Optimized Static Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(15,76,129,0.12),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(15,113,115,0.10),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F4C81]/10 backdrop-blur-md rounded-full border border-[#0F4C81]/20">
              <Zap className="w-4 h-4 text-[#0F4C81]" />
              <span className="text-sm font-medium text-gray-700">
                Enterprise-Grade Weighbridge Management
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold">
              <span className="block bg-gradient-to-r from-[#0F4C81] to-[#0F7173] bg-clip-text text-transparent">
                Advanced Weighbridge Software
              </span>
              <span className="block text-gray-900">
                for High-Precision Industrial Data
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Stop relying on manual ticketing. Our enterprise-grade platform
              ensures 100% data integrity and real-time visibility across all sites.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, text: "Fraud Prevention" },
                { icon: BarChart3, text: "Real-Time Analytics" },
                { icon: CheckCircle2, text: "Automated Reporting" },
                { icon: Shield, text: "Universal Hardware Support" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <feature.icon className="w-4 h-4 text-[#0F4C81]" />
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-[#0F4C81] to-[#0F7173] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold cursor-pointer">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </MagneticButton>

              <button className="px-8 py-4 bg-white/70 backdrop-blur-md text-gray-900 rounded-full border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-300 font-semibold">
                Watch Demo Video
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Active Sites
                </div>
              </div>

              <div className="w-px h-12 bg-gray-300" />

              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">
                  Uptime SLA
                </div>
              </div>

              <div className="w-px h-12 bg-gray-300" />

              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative">

            {/* Soft Glow (Reduced blur for performance) */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0F4C81]/15 to-[#0F7173]/15 blur-xl rounded-3xl -z-10" />

            {/* Dashboard Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden will-change-transform">
              <video
                ref={videoRef}
                src={dashboardVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600 font-medium">
                Today's Volume
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                4,847 <span className="text-lg text-gray-600">tons</span>
              </div>
              <div className="text-xs text-green-600 font-medium mt-1">
                ↑ 12% vs yesterday
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-green-50/80 backdrop-blur-xl rounded-2xl shadow-lg border border-green-200 p-4">
              <div className="text-sm text-gray-600 font-medium">
                Efficiency Gain
              </div>
              <div className="text-2xl font-bold text-[#0F4C81] mt-1">
                +32%
              </div>
              <div className="text-xs text-gray-600 font-medium mt-1">
                This month
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;