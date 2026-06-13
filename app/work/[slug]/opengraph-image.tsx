import { ogCard } from "@/lib/og";
import { getCaseStudy, getCaseStudies } from "@/lib/content";

export const alt = "Piotr Krzysztof";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return ogCard(study?.title ?? "Piotr Krzysztof", "Work");
}
