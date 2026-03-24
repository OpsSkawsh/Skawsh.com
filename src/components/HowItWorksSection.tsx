import { Smartphone, MapPin, Shirt, Truck } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "1",
    title: "Place Order",
    description: "Customer places order via Skawsh app"
  },
  {
    icon: MapPin,
    number: "2", 
    title: "Pickup",
    description: "Our driver picks up your clothes from your location"
  },
  {
    icon: Shirt,
    number: "3",
    title: "Processing", 
    description: "Partner laundry studio processes your clothes with care"
  },
  {
    icon: Truck,
    number: "4",
    title: "Delivery",
    description: "Driver delivers fresh, clean clothes back to you"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
          How Skawsh Works
        </h2>
        <p className="text-base md:text-lg text-skawsh-gray mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          Simple, transparent process that connects you with trusted local laundry studios
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-skawsh-blue rounded-full flex items-center justify-center mb-4 md:mb-6">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                {step.number}. {step.title}
              </h3>
              <p className="text-skawsh-gray text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;