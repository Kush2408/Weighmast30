import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Global Logistics Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 5,
      text: "Weighmast has revolutionized our weighbridge operations. We've reduced transaction time by 60% and virtually eliminated data entry errors. The ROI was realized within 3 months.",
    },
    {
      name: 'Sarah Williams',
      role: 'Plant Director',
      company: 'Midwest Manufacturing',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'The fraud prevention features alone have saved us thousands of dollars. Real-time monitoring and CCTV integration provide complete visibility into our weighing operations.',
    },
    {
      name: 'David Rodriguez',
      role: 'IT Director',
      company: 'Port Authority',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'Seamless integration with our existing systems and excellent technical support. The API documentation is comprehensive, making custom integrations straightforward.',
    },
    {
      name: 'Emily Thompson',
      role: 'CEO',
      company: 'Thompson Quarries',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: "Outstanding software with exceptional customer service. The mobile app lets me monitor operations from anywhere. It's transformed how we manage our multiple sites.",
    },
    {
      name: 'James Patterson',
      role: 'Logistics Coordinator',
      company: 'FastFreight Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'The automated reporting saves us hours every week. Customizable reports and instant data export make compliance and auditing effortless. Highly recommended!',
    },
    {
      name: 'Lisa Anderson',
      role: 'Supply Chain Manager',
      company: 'AgriPro Industries',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      rating: 5,
      text: 'User-friendly interface that our team adopted immediately. The training was minimal, and the efficiency gains were immediate. Best investment we made this year.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Customer Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our customers have to say 
            about their experience with Weighmast.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full bg-white rounded-3xl border border-gray-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-5">
                  <Quote className="w-20 h-20 text-gray-900" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-200/50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Active Customers' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Customer Retention' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
