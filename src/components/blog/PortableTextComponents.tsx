import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextComponents as PTComponents } from "@portabletext/react";

export const portableTextComponents: PTComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).quality(80).url()}
            alt={value.alt || "Blog image"}
            width={1200}
            height={675}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-[var(--color-muted)]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-2 text-xl font-semibold text-[var(--color-foreground)]">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-lg leading-relaxed text-[var(--color-foreground)]/80">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[var(--color-brand)] pl-6 italic text-[var(--color-foreground)]/70">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--color-foreground)]">
        {children}
      </strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-[var(--color-subtle)] px-1.5 py-0.5 text-sm font-mono text-[var(--color-brand)]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-[var(--color-brand)] underline underline-offset-2 hover:text-[var(--color-brand-dark)] transition-colors"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-6 list-disc space-y-2 text-lg text-[var(--color-foreground)]/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 ml-6 list-decimal space-y-2 text-lg text-[var(--color-foreground)]/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};
