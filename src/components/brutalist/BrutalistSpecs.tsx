import BrutalistCard from "./ui/BrutalistCard";
import { brutalistSpecs } from "@/lib/data";

/**
 * Vehicle specifications in industrial technical cards
 */
export default function BrutalistSpecs() {
  return (
    <section id="specs" className="relative py-24 bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-block border-8 border-[#FFD600] bg-[#1A1A1A] px-8 py-4">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#FFD600]">
              TECHNICAL SPECIFICATIONS
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brutalistSpecs.map((spec) => (
            <BrutalistCard key={spec.label} variant="concrete">
              <div className="space-y-4">
                <p className="font-bebas text-2xl tracking-wider">
                  {spec.label}
                </p>
                <div className="font-oswald text-7xl font-bold leading-none">
                  {spec.value}
                </div>
                <p className="font-ibm-mono text-sm uppercase">{spec.unit}</p>
              </div>
            </BrutalistCard>
          ))}
        </div>

        {/* Additional specs detail */}
        <div className="mt-16 border-8 border-black bg-[#D4D4D4] p-8 md:p-12">
          <p className="font-ibm-mono text-xs uppercase text-[#1A1A1A] leading-relaxed">
            ALSO AVAILABLE AS NON-DL MODEL (25 KM/H) — NO DRIVING LICENCE
            REQUIRED. SWAPPABLE BATTERY SYSTEM. 247 STATIONS ACROSS 5 CITIES.
            2-MINUTE SWAPS. ZERO DOWNTIME.
          </p>
        </div>
      </div>
    </section>
  );
}
