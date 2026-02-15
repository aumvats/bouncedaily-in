"use client";

import { useState } from "react";
import BrutalistButton from "./ui/BrutalistButton";

/**
 * Industrial meter-style savings calculator
 * Raw functionality, no decorative elements
 */
export default function BrutalistCalculator() {
  const [deliveries, setDeliveries] = useState(20);
  const petrolCost = 200; // Daily petrol cost
  const monthlySavings = deliveries * petrolCost;

  return (
    <section className="relative py-24 bg-[#D4D4D4]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="border-8 border-black bg-[#1A1A1A] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Calculator */}
            <div>
              <div className="inline-block border-8 border-[#FFD600] bg-[#1A1A1A] px-8 py-4 mb-12">
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-[#FFD600]">
                  CALCULATE SAVINGS
                </h2>
              </div>

              {/* Input */}
              <div className="space-y-6">
                <div>
                  <label className="block font-bebas text-2xl text-[#F5F5F5] mb-4">
                    DAILY DELIVERIES
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={deliveries}
                    onChange={(e) => setDeliveries(parseInt(e.target.value))}
                    className="w-full h-4 bg-[#525252] appearance-none cursor-pointer"
                    style={{
                      accentColor: "#FFD600",
                    }}
                  />
                  <div className="mt-4 flex justify-between font-ibm-mono text-sm uppercase text-[#9CA3AF]">
                    <span>10</span>
                    <span className="text-[#FFD600] text-2xl font-bold">
                      {deliveries}
                    </span>
                    <span>50</span>
                  </div>
                </div>

                <div className="border-t-4 border-[#525252] pt-6">
                  <p className="font-ibm-mono text-xs uppercase text-[#9CA3AF] mb-2">
                    DAILY PETROL COST
                  </p>
                  <p className="font-oswald text-4xl font-bold text-[#F5F5F5]">
                    ₹{petrolCost}
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center items-center border-8 border-[#FFD600] bg-[#1A1A1A] p-8 md:p-12">
              <p className="font-ibm-mono text-xs uppercase text-[#FFD600] mb-4">
                MONTHLY SAVINGS
              </p>
              <div className="font-oswald text-[clamp(4rem,15vw,12rem)] font-bold leading-none text-[#FFD600]">
                ₹{monthlySavings.toLocaleString()}
              </div>
              <p className="mt-8 font-ibm-mono text-xs uppercase text-[#F5F5F5] text-center">
                SWITCH TO ELECTRIC. STOP BURNING MONEY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
