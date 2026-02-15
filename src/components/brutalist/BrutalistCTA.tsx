import BrutalistButton from "./ui/BrutalistButton";
import { brutalistSiteConfig } from "@/lib/data";

/**
 * Safety sign aesthetic final call-to-action
 * Industrial warning/instruction styling
 */
export default function BrutalistCTA() {
  return (
    <section id="join" className="relative py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Diagonal safety stripes background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            #FFD600,
            #FFD600 40px,
            #1A1A1A 40px,
            #1A1A1A 80px
          )`,
        }}
      />

      {/* Large stencil number */}
      <div className="absolute bottom-0 right-0 font-oswald text-[600px] font-bold text-[#FFD600] opacity-[0.02] leading-none select-none">
        02
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
        {/* Warning-style header */}
        <div className="inline-block border-8 border-[#FFD600] bg-[#1A1A1A] px-12 py-6 mb-12">
          <div className="flex items-center justify-center gap-8">
            <div className="w-12 h-12 border-8 border-[#FFD600] bg-[#FFD600]" />
            <p className="font-bebas text-3xl tracking-wider text-[#FFD600]">
              NOTICE
            </p>
            <div className="w-12 h-12 border-8 border-[#FFD600] bg-[#FFD600]" />
          </div>
        </div>

        {/* Main message */}
        <h2 className="font-bebas text-[clamp(3rem,10vw,10rem)] leading-none tracking-tighter text-[#F5F5F5] mb-8">
          STOP
          <br />
          BURNING
          <br />
          <span className="text-[#FFD600]">MONEY</span>
        </h2>

        <p className="font-ibm-mono text-base uppercase text-[#F5F5F5] max-w-2xl mx-auto leading-relaxed mb-16">
          Download app. Complete KYC. Pick up scooter. Start earning. Zero
          fuel. Zero maintenance. Maximum grind.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-8">
          <BrutalistButton
            href={brutalistSiteConfig.playStoreUrl}
            variant="primary"
          >
            DOWNLOAD NOW
          </BrutalistButton>
          <BrutalistButton
            href={brutalistSiteConfig.stationsUrl}
            variant="secondary"
          >
            FIND NEAREST HUB
          </BrutalistButton>
        </div>

        {/* Bottom info */}
        <div className="mt-24 pt-12 border-t-4 border-[#525252]">
          <p className="font-ibm-mono text-xs uppercase text-[#9CA3AF]">
            247 STATIONS / 5 CITIES / 15,000+ RIDERS / ZERO FUEL
          </p>
        </div>
      </div>
    </section>
  );
}
