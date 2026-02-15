import { trustedByPlatforms } from "@/lib/data";

/**
 * High-contrast partner logo grid
 * Stark black and white treatment
 */
export default function BrutalistPartners() {
  return (
    <section className="relative py-24 bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="font-ibm-mono text-xs uppercase text-[#9CA3AF] mb-4">
            RIDERS DELIVER FOR
          </p>
          <div className="inline-block border-8 border-[#FFD600] bg-[#1A1A1A] px-8 py-4">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#FFD600]">
              PLATFORM PARTNERS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {trustedByPlatforms.map((name, i) => (
            <div
              key={name}
              className="border-4 border-black bg-[#D4D4D4] p-8 flex items-center justify-center hover:bg-[#FFD600] transition-none"
            >
              <span className="font-bebas text-2xl tracking-wider text-[#1A1A1A]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
