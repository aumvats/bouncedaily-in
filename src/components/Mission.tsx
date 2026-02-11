import { platformPoints } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Mission() {
  return (
    <section className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-brand">
              The Platform
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
              Infrastructure for
              <br />
              <span className="text-muted">India&apos;s electric last mile.</span>
            </h2>
            <p className="mt-8 text-lg text-muted leading-relaxed max-w-lg">
              We don&apos;t just rent scooters. We operate the full stack &mdash;
              vehicles, batteries, swap stations, fleet software, and rider
              operations &mdash; so every delivery in India can go electric.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid md:grid-cols-3 gap-12 lg:gap-16">
          {platformPoints.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 0.1}>
              <div>
                <div className="w-10 h-px bg-brand mb-6" />
                <h3 className="text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
