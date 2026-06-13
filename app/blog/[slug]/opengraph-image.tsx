import { ogCard } from "@/lib/og";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export const alt = "Piotr Krzysztof";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return ogCard(post?.title ?? "Piotr Krzysztof", "Blog");
}
