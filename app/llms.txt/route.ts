import { getBlogPosts, getCaseStudies } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://piotrkrzysztof.dev";

export function GET() {
  const lines = [
    "# Piotr Krzysztof",
    "",
    "> Piotr Krzysztof Lis, software engineer. Notes on private and commercial projects built along the way.",
    "",
    "## Work",
    "",
    ...getCaseStudies().map((s) => `- [${s.title}](${base}/work/${s.slug}): ${s.description}`),
    "",
    "## Blog",
    "",
    ...getBlogPosts().map((p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.description}`),
    "",
    "## Optional",
    "",
    `- [Home](${base}): Piotr Krzysztof Lis, personal site`,
    `- [Blog](${base}/blog)`,
    `- [Work](${base}/work)`,
    `- [About](${base}/about)`,
    "",
    "To the only God, be honour and glory for ever and ever.",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
