import Link from "next/link";
import { Breadcrumb } from "@/components/nav";
import { getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: debugging and infrastructure notes",
  description:
    "Write-ups from personal projects and client work: what broke, how it was found and what fixed it. Linux, Kubernetes, backend and a bit of frontend.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    siteName: "Piotr Krzysztof",
    url: "/blog",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      <Breadcrumb section="blog" />
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-brown-muted">No posts yet.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:text-brown-link transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-brown-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                {post.description && (
                  <p className="text-brown-muted mt-1">{post.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
