import { steps } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-brand">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              Riding in four steps.
              <br />
              <span className="text-muted">No, really.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.15}>
              <div className="group relative bg-white rounded-2xl p-8 lg:p-6 xl:p-8 h-full border border-transparent hover:border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Step number with brand accent on hover */}
                <span className="text-5xl font-bold text-border group-hover:text-brand/20 transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting arrow — visible on lg between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-border">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
