import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Post } from "@/sanity/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Bounce Daily",
  description:
    "Stories, updates, and insights from India's electric mobility revolution.",
};

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({
    query: postsQuery,
    tags: ["post"],
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-brand)]">
              Blog
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
              Stories &amp; Updates
            </h1>
            <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
              Insights from the road. Rider stories, product updates, and the
              journey of electrifying India&apos;s last mile.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          {posts.length === 0 ? (
            <p className="text-[var(--color-muted)] text-lg">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group"
                >
                  <article>
                    {post.mainImage?.asset && (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[var(--color-subtle)]">
                        <Image
                          src={urlFor(post.mainImage)
                            .width(800)
                            .height(500)
                            .quality(80)
                            .url()}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    {post.categories && post.categories.length > 0 && (
                      <div className="mt-4 flex gap-2">
                        {post.categories.map((cat) => (
                          <span
                            key={cat._id}
                            className="text-xs font-medium uppercase tracking-wider text-[var(--color-brand)]"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="mt-2 text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-brand)] transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-muted)]">
                      {post.author?.name && <span>{post.author.name}</span>}
                      {post.author?.name && post.publishedAt && (
                        <span className="text-[var(--color-border)]">
                          &middot;
                        </span>
                      )}
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
