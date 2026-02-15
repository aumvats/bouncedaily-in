import { brutalistQuotes } from "@/lib/data";

/**
 * Graffiti-style testimonial blocks
 * Raw rider voices, no polish
 */
export default function BrutalistQuotes() {
  return (
    <section id="riders" className="relative py-24 bg-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-block border-8 border-[#FFD600] bg-[#1A1A1A] px-8 py-4">
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#FFD600]">
              RIDER TESTIMONIALS
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {brutalistQuotes.map((quote, i) => (
            <div
              key={i}
              className={`border-8 border-black bg-[#D4D4D4] p-8 md:p-12 ${
                i < brutalistQuotes.length - 1 ? "md:border-r-0" : ""
              }`}
            >
              {/* Large quote mark */}
              <div className="font-bebas text-[120px] leading-none text-[#1A1A1A] opacity-20">
                "
              </div>

              {/* Quote text */}
              <p className="mt-4 font-bebas text-2xl md:text-3xl leading-tight text-[#1A1A1A]">
                {quote.text}
              </p>

              {/* Attribution */}
              <div className="mt-8 pt-8 border-t-4 border-black space-y-2">
                <p className="font-bebas text-xl tracking-wider text-[#1A1A1A]">
                  {quote.author}
                </p>
                <p className="font-ibm-mono text-xs uppercase text-[#525252]">
                  {quote.platform} / {quote.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
