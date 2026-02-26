import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, MessageSquare, Calendar, FileText } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

/* ============================= */
/* Reusable Animation Variants   */
/* ============================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ctaOptions = [
  {
    icon: Calendar,
    title: "Schedule a Demo",
    description: "See Weighmast in action with a personalized walkthrough",
  },
  {
    icon: MessageSquare,
    title: "Talk to Sales",
    description: "Get answers to your questions from our team",
  },
  {
    icon: FileText,
    title: "Download Brochure",
    description: "Explore features and pricing at your own pace",
  },
];

export const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Floating Orb (Optimized) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[60px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            variants={fadeUp}
            custom={0.2}
          >
            Ready to Transform Your
            <span className="block">Weighbridge Operations?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            custom={0.3}
          >
            Join hundreds of businesses that trust Weighmast for their
            weighbridge management. Start your free trial today—no credit card
            required.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={fadeUp}
            custom={0.4}
          >
            <MagneticButton className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-2xl">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 font-semibold cursor-pointer transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{ willChange: "transform" }}
            >
              Watch Demo Video
            </motion.button>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={fadeUp}
            custom={0.5}
          >
            {ctaOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                  variants={fadeUp}
                  custom={0.6 + index * 0.1}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/20"
            variants={fadeUp}
            custom={0.8}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/80">Uptime SLA</div>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-white/80">Customer Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};