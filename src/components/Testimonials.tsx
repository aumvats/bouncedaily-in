import { testimonials } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Testimonials() {
  return (
    <section id="stories" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-brand">
              Stories
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              Don&apos;t take our word for it.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 flex flex-col h-full border-l-3 border-brand/20 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-brand/15 mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <p className="text-lg leading-relaxed text-foreground flex-1">
                  {t.quote}
                </p>

                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-muted">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-sm text-muted mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
