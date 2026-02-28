import Link from "next/link";
import { Breadcrumb } from "@/components/nav";
import { getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, learning, and projects.",
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
