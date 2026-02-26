import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import logoImage from "./figma/WeighMAST.webp";

/* ─────────────────────────────────────────────
   Static Data (moved outside component)
───────────────────────────────────────────── */

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "Solutions", href: "#solutions" },
    { label: "Integrations", href: "#integrations" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Support Center", href: "#support" },
    { label: "Case Studies", href: "#cases" },
    { label: "Download", href: "#download" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" },
    { label: "Security", href: "#security" },
  ],
};

const CONTACT_INFO = [
  {
    icon: Mail,
    text: "sales@weighmast.com",
    href: "mailto:sales@weighmast.com",
  },
  {
    icon: Phone,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    text: "123 Business St, Tech City, TC 12345",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

/* ─────────────────────────────────────────────
   Reusable Motion Configs
───────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* ───────────────── Main Footer ───────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-1 lg:col-span-2">
            <motion.div className="mb-6" {...fadeUp()}>
              <img
                src={logoImage}
                alt="Weighmast Logo"
                className="h-8 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Complete weighbridge management software for modern businesses.
                Streamline operations, ensure accuracy, and boost efficiency.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              {CONTACT_INFO.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
                    {...fadeUp(index * 0.1)}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(
            ([category, links], categoryIndex) => (
              <motion.div key={category} {...fadeUp(categoryIndex * 0.1)}>
                <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm inline-block"
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* ───────────────── Newsletter ───────────────── */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl md:rounded-3xl border border-blue-200/50 p-6 md:p-8 mb-12"
          {...fadeUp()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Get the latest news, updates, and tips delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />

              <motion.button
                type="button"
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white rounded-full shadow-md hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-semibold text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ───────────────── Bottom Bar ───────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200/50">
          <motion.p
            className="text-gray-600 text-xs md:text-sm text-center md:text-left"
            {...fadeIn()}
          >
            © {currentYear} Weighmast. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex items-center gap-4" {...fadeIn(0.2)}>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};