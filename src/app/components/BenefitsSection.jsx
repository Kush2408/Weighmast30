import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  TrendingUp, 
  Target, 
  Shield, 
  Zap,
  DollarSign,
  Clock,
  Users,
  LineChart,
  CheckCircle2,
  Award
} from 'lucide-react';
import completeTransactionImage from 'figma:asset/b136b9bf5aa6814efa9381f86612ac798e688b3b.png';
import activeTransactionImage from 'figma:asset/bd316fcdbe7c2f2f437291dc4bf76861ec1b3811.png';

export const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Operational Efficiency',
      description: 'Reduce transaction time by up to 70% with automated weighing processes and streamlined workflows.',
      stat: '70%',
      statLabel: 'Faster Processing',
      color: 'blue',
    },
    {
      icon: DollarSign,
      title: 'Reduce Operational Costs',
      description: 'Minimize manual labor and eliminate paperwork. Save thousands in administrative costs annually.',
      stat: '45%',
      statLabel: 'Cost Reduction',
      color: 'green',
    },
    {
      icon: Shield,
      title: 'Enhanced Security & Compliance',
      description: 'Built-in fraud prevention, audit trails, and regulatory compliance features keep your operations secure.',
      stat: '100%',
      statLabel: 'Compliance',
      color: 'red',
    },
    {
      icon: Target,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with automated data capture and validation. Achieve near-perfect accuracy.',
      stat: '99.9%',
      statLabel: 'Accuracy Rate',
      color: 'purple',
    },
    {
      icon: LineChart,
      title: 'Real-Time Business Intelligence',
      description: 'Make data-driven decisions with live dashboards, comprehensive reports, and actionable insights.',
      stat: 'Live',
      statLabel: 'Data Updates',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Better Customer Experience',
      description: 'Faster service, digital receipts, and transparent processes lead to happier customers and partners.',
      stat: '95%',
      statLabel: 'Satisfaction',
      color: 'indigo',
    },
  ];

  const proofPoints = [
    { icon: Clock, value: '< 2 min', label: 'Average Transaction Time' },
    { icon: CheckCircle2, value: '500+', label: 'Active Installations' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' },
    { icon: Zap, value: '24/7', label: 'Technical Support' },
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="group h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-500/5 to-${benefit.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${benefit.color}-500/10 to-${benefit.color}-600/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon className={`w-7 h-7 text-${benefit.color}-600`} />
                    </motion.div>

                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-700 bg-clip-text text-transparent`}>
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">{benefit.statLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Section with Images */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left: Image */}
          <div className="relative">
            <motion.div
              className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={completeTransactionImage}
                alt="Transaction Management"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-200/60 p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-600 font-medium">Monthly Savings</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                $15,000+
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Proven Results Across Industries
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From manufacturing plants to logistics hubs, Weighmast delivers 
              measurable improvements in efficiency, accuracy, and cost savings.
            </p>

            <div className="space-y-4">
              {[
                'Automated data capture eliminates manual entry errors',
                'Real-time monitoring prevents operational delays',
                'Comprehensive audit trails ensure full compliance',
                'Scalable architecture grows with your business',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
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
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/60 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <point.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{point.value}</div>
              <div className="text-sm text-gray-600 font-medium">{point.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
