import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

const testimonialsData = [
  {
    text: "Aide feels like having a second brain that actually does things, not just remembers them.",
    name: "Jules J.",
    role: "Startup founder",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "It's like having an extra teammate that never forgets anything.",
    name: "Alex J.",
    role: "Startup founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "This thing pulls up docs I forgot existed. It’s spooky in the best way.",
    name: "Nia K.",
    role: "Content strategist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "It summarizes my whole workday before I close my laptop.",
    name: "Jamal G.",
    role: "Remote PM",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "I don’t even write briefs anymore. It just gets it.",
    name: "Priya H.",
    role: "Product lead",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

export default function LoomaTestimonials() {
  const scrollRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  // Duplicate once for seamless infinite scroll
  const testimonials = useMemo(
    () => [...testimonialsData, ...testimonialsData],
    []
  );

  useEffect(() => {
    if (!scrollRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setScrollHeight(scrollRef.current.scrollHeight / 2);
    });

    resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#fffaff] flex items-center justify-center px-6 lg:px-12 py-24 overflow-hidden font-sans">
      
      {/* Background Blob */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full w-fit shadow-sm">
              <Sparkles size={14} className="text-gray-400" />
              <span className="text-[11px] font-semibold tracking-tight bg-gradient-to-r from-[#4facfe] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[42px] md:text-[52px] leading-[1.05] font-bold text-[#1a1b1f] tracking-tight">
              People are building <br />
              faster with{" "}
              <span className="bg-gradient-to-r from-[#4facfe] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
                WeighMast.
              </span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="98%" label="Context accuracy" borderClass="border-blue-200" />
            <StatCard value="20+" label="Integrations" borderClass="border-indigo-200" />
            <StatCard value="10x" label="Faster decision making" borderClass="border-orange-200" />
            <StatCard value="10K+" label="Daily users" borderClass="border-pink-200" />
          </div>
        </div>

        {/* RIGHT TICKER */}
        <div className="relative h-[650px] overflow-hidden">
          
          {/* Fade overlays */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fffaff] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaff] to-transparent z-20 pointer-events-none" />

          <motion.div
            ref={scrollRef}
            animate={scrollHeight ? { y: [0, -scrollHeight] } : {}}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-6"
          >
            {testimonials.map((item, i) => (
              <TestimonialCard key={`${item.name}-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const StatCard = React.memo(function StatCard({ value, label, borderClass }) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-[32px] p-8 lg:p-10 border ${borderClass} shadow-sm flex flex-col justify-center min-h-[160px] transition-all duration-300 hover:shadow-md`}
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-[#1a1b1f] mb-2">
        {value}
      </h3>
      <p className="text-[12px] font-medium text-gray-400 tracking-wide">
        {label}
      </p>
    </div>
  );
});

const TestimonialCard = React.memo(function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
      
      {/* Stars */}
      <div className="flex gap-1 text-orange-400/90">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#4b5563] text-[15.5px] leading-relaxed">
        “{item.text}”
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover border border-gray-100"
        />
        <div>
          <p className="text-[14px] font-bold text-[#1a1b1f]">
            {item.name}
          </p>
          <p className="text-[12px] font-medium text-gray-400">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
});