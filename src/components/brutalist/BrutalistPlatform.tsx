import { brutalistPlatform } from "@/lib/data";

/**
 * Stacked horizontal infrastructure layers
 * Visual representation of the platform stack
 */
export default function BrutalistPlatform() {
  return (
    <section className="relative py-24 bg-[#D4D4D4]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-block border-8 border-black bg-[#1A1A1A] px-8 py-4">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#FFD600]">
              PLATFORM STACK
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {brutalistPlatform.map((layer, i) => (
            <div
              key={layer.title}
              className={`border-8 border-black bg-[#1A1A1A] p-8 md:p-16 hover:bg-[#FFD600] hover:border-[#FFD600] transition-none group ${
                i < brutalistPlatform.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Layer number */}
                <div className="font-oswald text-[120px] leading-none font-bold text-[#FFD600] group-hover:text-[#1A1A1A]">
                  0{i + 1}
                </div>

                {/* Layer title */}
                <div className="flex-1">
                  <h3 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#F5F5F5] group-hover:text-[#1A1A1A]">
                    {layer.title}
                  </h3>
                </div>

                {/* Layer description */}
                <div className="md:max-w-md">
                  <p className="font-ibm-mono text-sm uppercase text-[#F5F5F5] group-hover:text-[#1A1A1A] leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
