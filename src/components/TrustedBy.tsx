import { trustedByPlatforms } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function TrustedBy() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="text-center text-sm text-muted tracking-wide">
            Riders on our fleet deliver for
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedByPlatforms.map((name) => (
              <span
                key={name}
                className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground/15 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
