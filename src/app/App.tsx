import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion"; // ✅ correct package
import { useLenis } from "./hooks/useLenis";
import { usePageLoader } from "./hooks/usePageLoader";
import { PageLoader } from "./components/PageLoader";
import { GradientBackground } from "./components/GradientBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import React from "react";
import SplitText from "./components/SplitText";
import GradientText from "./components/GradientText";
import { MacbookScroll } from "./components/MacbookScroll";

// Lazy loaded sections
const FeaturesSection = lazy(() =>
  import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection }))
);
const BenefitsSection = lazy(() =>
  import("./components/BenefitsSection").then(module => ({ default: module.BenefitsSection }))
);
const ProductShowcase = lazy(() =>
  import("./components/ProductShowcase").then(module => ({ default: module.ProductShowcase }))
);
const UseCasesSection = lazy(() =>
  import("./components/UseCasesSection").then(module => ({ default: module.UseCasesSection }))
);
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection")
);
const CTASection = lazy(() =>
  import("./components/CTASection").then(module => ({ default: module.CTASection }))
);

const PricingSection = lazy(() =>
  import("./components/Pricing")
);

const LogoLoop = lazy(() =>
  import("./components/LogoLoop")
);

function App() {
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
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="loader" progress={progress} />}
      </AnimatePresence>
      <div
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-500 ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <GradientBackground />
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="h-20" />}>
            {/* Macbook Scroll Section */}
            <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
              <MacbookScroll
                src="/figma/dashboardanimated_P.mov"
                // title="Our Product Demo"
                showGradient={true}
              />
            </section>
            <FeaturesSection />
            <BenefitsSection />
            <PricingSection />
            <ProductShowcase />
            <UseCasesSection />
            <TestimonialsSection />
            <section className="clients-section">
              <div className="clients-container">

                <div className="clients-header">
                  <h2 className="clients-title">
                    <GradientText>
                      <SplitText text="Trusted By" />
                    </GradientText>
                  </h2>
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
            <CTASection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;