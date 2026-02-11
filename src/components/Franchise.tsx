import { franchiseBenefits } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Franchise() {
  return (
    <section id="franchise" className="py-32 lg:py-40 bg-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Copy */}
          <AnimateOnScroll>
            <div className="max-w-lg">
              <p className="text-sm font-medium tracking-widest uppercase text-brand">
                Franchise
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                Own the fleet.
                <br />
                <span className="text-muted">We do the rest.</span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Build a profitable electric mobility business in your city. We
                bring the riders, the technology, and the operational backbone.
                You bring the ambition.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/franchise"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
                >
                  Apply to partner
                </a>
                <a
                  href="mailto:franchise@bouncedaily.in"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-subtle"
                >
                  franchise@bouncedaily.in
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {franchiseBenefits.map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-base font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
