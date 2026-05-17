import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Skawsh — On-demand Laundry & Dry Cleaning App"
        description="Skip the laundry chore. Skawsh connects you with trusted local studios for pickup, wash, and delivery — all through our mobile app."
        path="/"
      />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
