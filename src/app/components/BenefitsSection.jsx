import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  TrendingUp, Target, Shield, Zap,
  DollarSign, Clock, Users, LineChart,
  CheckCircle2, Award
} from 'lucide-react';
import completeTransactionImage from './figma/completetransactionlist.webp';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Memoized color mapping for efficiency
  const colorMap = useMemo(() => ({
    blue: { bg: '#0ea5e9', bgLight: 'rgba(14, 165, 233, 0.1)', bgLighter: 'rgba(14, 165, 233, 0.05)', hoverOverlay: 'rgba(14, 165, 233, 0.05), rgba(14, 165, 233, 0.1)' },
    green: { bg: '#22c55e', bgLight: 'rgba(34, 197, 94, 0.1)', bgLighter: 'rgba(34, 197, 94, 0.05)', hoverOverlay: 'rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.1)' },
    red: { bg: '#ef4444', bgLight: 'rgba(239, 68, 68, 0.1)', bgLighter: 'rgba(239, 68, 68, 0.05)', hoverOverlay: 'rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.1)' },
    purple: { bg: '#a855f7', bgLight: 'rgba(168, 85, 247, 0.1)', bgLighter: 'rgba(168, 85, 247, 0.05)', hoverOverlay: 'rgba(168, 85, 247, 0.05), rgba(168, 85, 247, 0.1)' },
    orange: { bg: '#f97316', bgLight: 'rgba(249, 115, 22, 0.1)', bgLighter: 'rgba(249, 115, 22, 0.05)', hoverOverlay: 'rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.1)' },
    indigo: { bg: '#6366f1', bgLight: 'rgba(99, 102, 241, 0.1)', bgLighter: 'rgba(99, 102, 241, 0.05)', hoverOverlay: 'rgba(99, 102, 241, 0.05), rgba(99, 102, 241, 0.1)' },
  }), []);

  const benefits = useMemo(() => [
    { icon: TrendingUp, title: 'Increase Operational Efficiency', description: 'Reduce transaction time by up to 70% with automated weighing processes and streamlined workflows.', stat: '70%', statLabel: 'Faster Processing', color: 'blue' },
    { icon: DollarSign, title: 'Reduce Operational Costs', description: 'Minimize manual labor and eliminate paperwork. Save thousands in administrative costs annually.', stat: '45%', statLabel: 'Cost Reduction', color: 'green' },
    { icon: Shield, title: 'Enhanced Security & Compliance', description: 'Built-in fraud prevention, audit trails, and regulatory compliance features keep your operations secure.', stat: '100%', statLabel: 'Compliance', color: 'red' },
    { icon: Target, title: 'Improved Accuracy', description: 'Eliminate human errors with automated data capture and validation. Achieve near-perfect accuracy.', stat: '99.9%', statLabel: 'Accuracy Rate', color: 'purple' },
    { icon: LineChart, title: 'Real-Time Business Intelligence', description: 'Make data-driven decisions with live dashboards, comprehensive reports, and actionable insights.', stat: 'Live', statLabel: 'Data Updates', color: 'orange' },
    { icon: Users, title: 'Better Customer Experience', description: 'Faster service, digital receipts, and transparent processes lead to happier customers and partners.', stat: '95%', statLabel: 'Satisfaction', color: 'indigo' },
  ], []);

  const proofPoints = useMemo(() => [
    { icon: Clock, value: '< 2 min', label: 'Average Transaction Time' },
    { icon: CheckCircle2, value: '500+', label: 'Active Installations' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' },
    { icon: Zap, value: '24/7', label: 'Technical Support' },
  ], []);

  // Reusable motion variants
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="benefits" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Business Benefits</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-[#0F4C81] via-[#0F5F8A] to-[#0F7173] bg-clip-text text-transparent">
              Weighbridge Operations
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover how Weighmast helps businesses achieve operational excellence 
            and measurable ROI within months of implementation.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {benefits.map((b, i) => (
            <motion.div key={b.title} {...fadeUp(i * 0.1)}>
              <motion.div
                className="group h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `linear-gradient(135deg, ${colorMap[b.color].hoverOverlay})` }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `linear-gradient(to bottom right, ${colorMap[b.color].bgLight}, ${colorMap[b.color].bgLighter})` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <b.icon className="w-7 h-7" style={{ color: colorMap[b.color].bg }} />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-3xl font-bold" style={{ color: colorMap[b.color].bg }}>{b.stat}</div>
                      <div className="text-xs text-gray-600 font-medium">{b.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Showcase */}
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-16" {...fadeUp(0.6)}>
          <div className="relative">
            <motion.div className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl" whileHover={{ scale: 1.02, rotateY: 2 }} transition={{ duration: 0.4 }}>
              <img src={completeTransactionImage} alt="Transaction Management" className="w-full h-auto" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-gray-200/60 p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform' }}
            >
              <div className="text-sm text-gray-600 font-medium">Monthly Savings</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">$15,000+</div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Proven Results Across Industries</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From manufacturing plants to logistics hubs, Weighmast delivers measurable improvements in efficiency, accuracy, and cost savings.
            </p>
            <div className="space-y-4">
              {[
                'Automated data capture eliminates manual entry errors',
                'Real-time monitoring prevents operational delays',
                'Comprehensive audit trails ensure full compliance',
                'Scalable architecture grows with your business',
              ].map((point, i) => (
                <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proof Points */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" {...fadeUp(0.8)}>
          {proofPoints.map((p, i) => (
            <motion.div
              key={p.label}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/60 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center mx-auto mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
                <p.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{p.value}</div>
              <div className="text-sm text-gray-600 font-medium">{p.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BenefitsSection;