import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/LaundryService",
  name: "Skawsh",
  url: "https://skawsh.com",
  telephone: "+917993631199",
  email: "contact@skawsh.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: [
    "Shaikpet",
    "Manikonda",
    "TNGO Colony",
    "Raidurg",
    "Gachibowli",
    "Wipro Circle",
    "Kothaguda",
    "Kondapur",
  ].map((name) => ({ "@type": "Place", name })),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Skawsh — Laundry & Dry Cleaners Near Me | Hyderabad Pickup & Delivery"
        description="Looking for laundry or dry cleaners near you? Skawsh connects Hyderabad customers with trusted local studios — pickup, wash, dry clean & delivery via our mobile app."
        path="/"
        keywords="laundry near me, dry cleaners near me, laundry service Hyderabad, dry cleaning Hyderabad, laundry pickup and delivery, Gachibowli, Manikonda, Raidurg, Kothaguda"
        jsonLd={localBusinessSchema}
      />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <AboutSection />
      <ServiceAreas />
      <Footer />
    </div>
  );
};

export default Index;
