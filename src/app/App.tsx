import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { GradientBackground } from './components/GradientBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ProductShowcase } from './components/ProductShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Prevent FOUC and handle reduced motion
  useEffect(() => {
    // Set page title
    document.title = 'Weighmast - Complete Weighbridge Software Solution';
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Animated gradient background */}
      <GradientBackground />
      
      {/* Main content */}
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <ProductShowcase />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;