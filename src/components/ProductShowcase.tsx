import Image from "next/image";
import { vehicle } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ProductShowcase() {
  return (
    <section id="vehicles" className="py-32 lg:py-40 bg-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium tracking-widest uppercase text-brand">
              The Vehicle
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              Built to earn.
              <br />
              <span className="text-muted">Built to last.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,59,59,0.04)_0%,transparent_70%)] scale-125 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-3xl bg-white flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={500}
                  height={375}
                  className="w-3/4 h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {vehicle.name}
              </h3>
              <p className="mt-4 text-lg text-muted leading-relaxed max-w-md">
                {vehicle.description}
              </p>

              {/* Specs grid */}
              <div className="mt-10 grid grid-cols-2 gap-8">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-border pl-4">
                    <p className="text-2xl font-semibold tracking-tight">
                      {spec.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Non-DL footnote — subtle */}
              <p className="mt-10 text-sm text-muted">
                {vehicle.noDLNote}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
