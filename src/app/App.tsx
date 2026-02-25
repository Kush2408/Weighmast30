import { useEffect, lazy, Suspense } from "react";
import { useLenis } from "./hooks/useLenis";
import { GradientBackground } from "./components/GradientBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import React from "react";
import SplitText from "./components/SplitText";
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

const LogoLoop = lazy(() =>
  import("./components/LogoLoop")
);

function App() {
  useLenis();

  useEffect(() => {
    document.title = "Weighmast - Complete Weighbridge Software Solution";

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <GradientBackground />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-20" />}>
          <FeaturesSection />
          <BenefitsSection />
          <ProductShowcase />
          <UseCasesSection />
          <TestimonialsSection />
          <section className="clients-section">
            <div className="clients-container">
              <div className="clients-header">
                <h2 className="clients-title">
                  <SplitText text="Our Clients" />
                </h2>
                <p className="clients-description">
                  Trusted by high-growth startups and global enterprises to scale faster,
                  operate smarter, and lead their industries.
                </p>
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
  );
}

export default App;