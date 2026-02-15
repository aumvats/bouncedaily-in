import { pressPullQuote, pressLogos } from "@/lib/data";

/**
 * Stencil typography press quotes
 * Massive letterforms, industrial presentation
 */
export default function BrutalistPress() {
  return (
    <section id="press" className="relative py-24 bg-[#D4D4D4]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Press quote - giant stencil style */}
        <div className="mb-24 border-8 border-black bg-[#1A1A1A] p-8 md:p-16">
          <div className="font-bebas text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-[#F5F5F5] max-w-5xl">
            "{pressPullQuote.quote}"
          </div>
          <div className="mt-8 pt-8 border-t-4 border-[#525252]">
            <p className="font-ibm-mono text-sm uppercase text-[#FFD600]">
              — {pressPullQuote.source}
            </p>
          </div>
        </div>

        {/* Press logos */}
        <div>
          <p className="font-ibm-mono text-xs uppercase text-[#525252] mb-8 text-center">
            FEATURED IN
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {pressLogos.map((pub) => (
              <a
                key={pub.name}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-black bg-[#1A1A1A] p-8 flex items-center justify-center hover:bg-[#FFD600] transition-none group"
              >
                <span className="font-bebas text-xl tracking-wider text-[#F5F5F5] group-hover:text-[#1A1A1A] text-center">
                  {pub.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
