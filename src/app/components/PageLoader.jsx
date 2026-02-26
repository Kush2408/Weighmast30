import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import endelLogo from "./figma/EndelDigitalSolutionsPvt.Ltd04.webp";

const BRAND_BLUE = "#0F4C81";
const BRAND_GREEN = "#0F7173";

export const PageLoader = ({ progress }) => {
  const motionProgress = useMotionValue(0);
  const spring = useSpring(motionProgress, { stiffness: 90, damping: 20, mass: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionProgress.set(progress);
  }, [progress]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      setDisplayValue(Math.round(v));
    });
    return () => unsubscribe();
  }, [spring]);

  const logoSize = 120; // Logo diameter
  const stroke = 8;     // Thickness of progress ring
  const radius = logoSize / 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset = useTransform(spring, (value) => {
    return circumference - (value / 100) * circumference;
  });

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f4f8fb]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Circular progress around logo */}
      <div className="relative" style={{ width: logoSize, height: logoSize }}>
        <svg width={logoSize} height={logoSize}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={BRAND_BLUE} />
              <stop offset="100%" stopColor={BRAND_GREEN} />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Animated progress circle */}
          <motion.circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
        </svg>

        {/* Logo centered inside circle */}
        <img
          src={endelLogo}
          alt="Endel Digital"
          className="absolute top-1/2 left-1/2 object-contain"
          style={{
            width: logoSize - stroke * 2,
            height: logoSize - stroke * 2,
            transform: "translate(-50%, -50%)",
          }}
          draggable={false}
        />

        {/* Percentage inside logo */}
        <div
          className="absolute text-sm font-semibold tracking-wider"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: displayValue > 50 ? "#ffffff" : "#0F4C81",
          }}
        >
          {displayValue}%
        </div>
      </div>

      {/* Heading under the logo */}
      <h1
        className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight"
        style={{
          fontFamily: "Outfit, system-ui",
          background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_GREEN})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Endel Digital
      </h1>
    </motion.div>
  );
};

export default React.memo(PageLoader);