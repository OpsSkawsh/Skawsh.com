import { AppStoreButtons } from "@/components/AppStoreButtons";
import { SERVICE_AREAS } from "@/components/serviceAreas";

const HeroSection = () => {
  const marqueeItems = [...SERVICE_AREAS, ...SERVICE_AREAS];

  return (
    <section className="bg-skawsh-blue text-white min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block">Laundry Pickup in Minutes.</span>
          <span className="block">Delivered Fresh to Your Door.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 opacity-80 max-w-3xl mx-auto">
          Laundry and dry cleaning near you in Hyderabad — pickup & delivery booked in seconds via the Skawsh app.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 opacity-80 max-w-3xl mx-auto">
          Turn laundry from a burden into freedom. Skawsh makes your clothes fresh, clean, and ready — while you focus on what really matters.
        </p>
        <p className="text-sm opacity-80 mb-3">Download the Skawsh app</p>
        <AppStoreButtons className="justify-center items-center mb-10 md:mb-12" />
        <div className="max-w-3xl mx-auto">
          <p className="text-sm opacity-80 mb-3">We are currently available in</p>
          <div
            className="relative overflow-hidden max-w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            aria-label={`Service areas: ${SERVICE_AREAS.join(", ")}`}
          >
            <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
              {marqueeItems.map((area, i) => (
                <span
                  key={i}
                  className="text-white/60 text-sm md:text-base px-6 whitespace-nowrap flex items-center"
                >
                  {area}
                  <span className="ml-6 text-white/30" aria-hidden="true">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
