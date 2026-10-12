import Link from "next/link";
import { Breadcrumb } from "@/components/nav";
import { getCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work: Open-Source Projects and Write-ups",
  description:
    "Open-source projects, each with a write-up: what the project does, how it is put together and what building it taught.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    siteName: "Piotr Krzysztof",
    url: "/work",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function WorkIndex() {
  const studies = getCaseStudies();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <Breadcrumb section="work" />
      <h1 className="text-4xl font-bold mb-10">Selected Work</h1>
      {studies.length === 0 ? (
        <p className="text-brown-muted">Coming soon.</p>
      ) : (
        <div className="space-y-6">
          {studies.map((study) => (
            <article key={study.slug}>
              <Link href={`/work/${study.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:text-brown-link transition-colors">
                  {study.title}
                </h2>
                {study.description && (
                  <p className="text-brown-muted mt-1">{study.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
