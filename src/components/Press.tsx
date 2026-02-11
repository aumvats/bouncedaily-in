import { pressLogos, pressPullQuote } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Press() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="text-center text-sm text-muted tracking-wide uppercase">
            Featured in
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {pressLogos.map((pub) => (
              <a
                key={pub.name}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-xl font-bold text-foreground/15 hover:text-foreground/40 transition-colors duration-300 tracking-tight"
              >
                {pub.name}
              </a>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 w-16 h-px bg-border mx-auto" />
          <figure className="mt-16 max-w-3xl mx-auto text-center">
            <blockquote>
              <p className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug text-foreground">
                &ldquo;{pressPullQuote.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              &mdash; {pressPullQuote.source}
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
