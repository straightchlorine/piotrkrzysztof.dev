import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/components/mdx-components";
import { getCaseStudy, getCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <Link href="/work" className="text-brown-muted hover:text-brown transition-colors text-sm">
        &larr; Back to Work
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          {study.title}
        </h1>
        <div className="prose-custom">
          <MDXRemote
            source={study.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
