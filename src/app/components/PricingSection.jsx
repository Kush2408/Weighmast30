import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Zap, Star, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const PricingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small operations',
      price: '299',
      period: 'month',
      popular: false,
      features: [
        'Single weighbridge support',
        'Up to 5 user accounts',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Data export (Excel/PDF)',
        'Standard receipt templates',
        '1 GB cloud storage',
      ],
      color: 'blue',
    },
    {
      name: 'Professional',
      description: 'Most popular for growing businesses',
      price: '599',
      period: 'month',
      popular: true,
      features: [
        'Up to 3 weighbridges',
        'Unlimited user accounts',
        'Advanced analytics & reporting',
        'Priority support (24/7)',
        'CCTV integration',
        'Custom receipt templates',
        'API access',
        '10 GB cloud storage',
        'Role-based permissions',
        'Fraud detection alerts',
      ],
      color: 'purple',
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      period: '',
      popular: false,
      features: [
        'Unlimited weighbridges',
        'Unlimited users',
        'Enterprise analytics',
        'Dedicated support manager',
        'Multi-site management',
        'Custom integrations',
        'Advanced security features',
        'Unlimited cloud storage',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee',
        'Training & onboarding',
      ],
      color: 'red',
    },
  ];

  return (
    <section
      id="pricing"
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
            <span className="text-sm font-semibold text-blue-700">Simple Pricing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Choose the Right Plan
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Transparent pricing with no hidden fees. All plans include free updates 
            and customer support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`h-full bg-white/80 backdrop-blur-sm rounded-3xl border ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'border-gray-200/60 shadow-sm'
                } p-8 relative overflow-hidden`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-bold text-gray-900">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-600 font-medium">/{plan.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.05 }}
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {plan.popular ? (
                    <MagneticButton className="w-full group px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  ) : (
                    <motion.button
                      className="w-full px-6 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            All plans include a <span className="font-semibold text-gray-900">30-day money-back guarantee</span> 
            {' '}and <span className="font-semibold text-gray-900">free migration assistance</span>.
          </p>
          <p className="text-sm text-gray-500">
            Volume discounts available for multi-site deployments. Contact our sales team for custom quotes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
