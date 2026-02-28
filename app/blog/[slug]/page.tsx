import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import { Breadcrumb } from "@/components/nav";
import { mdxComponents } from "@/components/mdx-components";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      <Breadcrumb section="blog" />
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          {post.title}
        </h1>
        <time className="text-brown-muted block mb-10">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="prose-custom">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath],
                rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeKatex],
              },
            }}
          />
        </div>
      </article>
      <div className="mt-16">
        <Link href="/blog" className="text-brown-muted hover:text-brown transition-colors">
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
