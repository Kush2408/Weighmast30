import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

const testimonials = [
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

  useEffect(() => {
    if (scrollRef.current) {
      setScrollHeight(scrollRef.current.scrollHeight / 2);
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-[#fffaff] flex items-center justify-center p-8 overflow-hidden font-sans">
      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-100/40 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1200px] w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {/* Pill Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/80 border border-gray-200 rounded-full w-fit shadow-sm">
              <Sparkles size={12} className="text-gray-400" />
              <span className="text-[11px] font-semibold text-gray-500 tracking-tight bg-gradient-to-r from-[#4facfe] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">Testimonials</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[52px] leading-[1.1] font-bold text-[#1a1b1f] tracking-tight">
              People are building <br /> faster with{" "}
              <span className="bg-gradient-to-r from-[#4facfe] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
                WeighMast.
              </span>
            </h2>
          </div>

          {/* ASYMMETRICAL STAT GRID */}
          <div className="grid grid-cols-2 gap-5">
            <StatCard value="98%" label="Context accuracy" borderClass="border-blue-200" />
            <StatCard value="20+" label="Integrations" borderClass="border-indigo-200" />
            <StatCard value="10x" label="Faster decision making" borderClass="border-orange-200" />
            <StatCard value="10K+" label="Daily users" borderClass="border-pink-200" />
          </div>
        </div>

        {/* RIGHT SIDE: TICKER */}
        <div className="relative h-[650px] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fffaff] to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaff] to-transparent z-20" />

          <motion.div
            ref={scrollRef}
            animate={scrollHeight ? { y: [0, -scrollHeight] } : {}}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-6"
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, borderClass }) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-[32px] p-10 border-[1.5px] ${borderClass} shadow-sm flex flex-col items-start justify-center min-h-[170px]`}>
      <h3 className="text-4xl font-bold text-[#1a1b1f] mb-2">{value}</h3>
      <p className="text-[12px] font-medium text-gray-400 tracking-wide">{label}</p>
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] flex flex-col gap-6">
      <div className="flex gap-1 text-orange-400/80">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
      </div>
      <p className="text-[#4b5563] text-[16px] leading-relaxed">"{item.text}"</p>
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
        <div>
          <p className="text-[14px] font-bold text-[#1a1b1f]">{item.name}</p>
          <p className="text-[12px] font-medium text-gray-400">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
