import React, { useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { usePageLoader } from "./hooks/usePageLoader";
import { PageLoader } from "./components/PageLoader";

// Lazy-loaded components (assumes default exports)
const GradientBackground = lazy(() => import("./components/GradientBackground"));
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const MacbookScroll = lazy(() => import("./components/MacbookScroll"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const BenefitsSection = lazy(() => import("./components/BenefitsSection"));
const ProductShowcase = lazy(() => import("./components/ProductShowcase"));
const UseCasesSection = lazy(() => import("./components/UseCasesSection"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection"));
const CTASection = lazy(() => import("./components/CTASection"));
const PricingSection = lazy(() => import("./components/Pricing"));
const LogoLoop = lazy(() => import("./components/LogoLoop"));
const Footer = lazy(() => import("./components/Footer"));

const App: React.FC = () => {
  useLenis();
  const { isLoading, progress } = usePageLoader();

  useEffect(() => {
    document.title = "Weighmast - Complete Weighbridge Software Solution";

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  }, []);

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="loader" progress={progress} />}
      </AnimatePresence>

      <div
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-500 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Background */}
        <Suspense fallback={<div />}>
          <GradientBackground />
        </Suspense>

        {/* Navbar */}
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>

        <main>
          {/* Hero Section */}
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Hero...</div>}>
            <HeroSection />
          </Suspense>

          {/* Macbook Scroll / Demo Video */}
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Demo...</div>}>
            <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
              <MacbookScroll src="/figma/dashboardanimated_P.mov" showGradient={true} />
            </section>
          </Suspense>

          {/* Features Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Features...</div>}>
            <FeaturesSection />
          </Suspense>

          {/* Benefits Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Benefits...</div>}>
            <BenefitsSection />
          </Suspense>

          {/* Pricing Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Pricing...</div>}>
            <PricingSection />
          </Suspense>

          {/* Product Showcase */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Product Showcase...</div>}>
            <ProductShowcase />
          </Suspense>

          {/* Use Cases Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Use Cases...</div>}>
            <UseCasesSection />
          </Suspense>

          {/* Testimonials Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Testimonials...</div>}>
            <TestimonialsSection />
          </Suspense>

          {/* Clients Section with LogoLoop */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading Clients...</div>}>
            <section className="clients-section">
              <div className="clients-container">
                <div className="clients-header">
                  <h2 className="clients-title">Trusted By</h2>
                </div>
                <LogoLoop
                  logoHeight={50}
                  direction="right"
                  gap={120}
                  speed={60}
                  fadeOut
                  scaleOnHover
                />
              </div>
            </section>
          </Suspense>

          {/* CTA Section */}
          <Suspense fallback={<div className="min-h-screen py-20">Loading CTA...</div>}>
            <CTASection />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;