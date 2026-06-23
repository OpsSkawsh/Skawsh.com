import { SERVICE_AREAS } from "@/components/serviceAreas";

const ServiceAreas = () => {
  const items = [...SERVICE_AREAS, ...SERVICE_AREAS];

  return (
    <section className="bg-white py-8 md:py-10 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm md:text-base font-medium text-gray-600 mb-4">
          We are currently available in
        </p>

        <div
          className="relative overflow-hidden max-w-full"
          aria-label={`Service areas: ${SERVICE_AREAS.join(", ")}`}
        >
          <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
            {items.map((area, i) => (
              <span
                key={i}
                className="text-gray-400 text-sm md:text-base px-6 whitespace-nowrap flex items-center"
              >
                {area}
                <span className="ml-6 text-gray-300" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
