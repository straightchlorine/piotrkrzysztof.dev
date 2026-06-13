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
  const url = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Piotr Krzysztof Lis"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Piotr Krzysztof Lis",
      url: "https://piotrkrzysztof.dev",
    },
    publisher: { "@type": "Person", name: "Piotr Krzysztof Lis" },
    mainEntityOfPage: `https://piotrkrzysztof.dev/blog/${slug}`,
    url: `https://piotrkrzysztof.dev/blog/${slug}`,
    image: `https://piotrkrzysztof.dev/blog/${slug}/opengraph-image`,
  };

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb section="blog" />
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          {post.title}
        </h1>
        <time dateTime={post.date} className="text-brown-muted block mb-10">
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
