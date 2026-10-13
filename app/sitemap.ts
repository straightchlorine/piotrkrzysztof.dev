import type { MetadataRoute } from "next";
import { getBlogPosts, getCaseStudies } from "@/lib/content";

// YYYY-MM-DD strings sort as dates
const latest = (dates: (string | undefined)[]) =>
  dates.filter((d): d is string => Boolean(d)).sort().pop();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://piotrkrzysztof.dev";
  const posts = getBlogPosts();
  const studies = getCaseStudies();

  const postsLast = latest(posts.map((p) => p.updated ?? p.date));
  const studiesLast = latest(studies.map((s) => s.updated));

  // lastmod only where a real date exists; /about has none
  return [
    { url: baseUrl, lastModified: latest([postsLast, studiesLast]) },
    { url: `${baseUrl}/blog`, lastModified: postsLast },
    { url: `${baseUrl}/work`, lastModified: studiesLast },
    { url: `${baseUrl}/about` },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated ?? post.date,
    })),
    ...studies.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified: study.updated,
    })),
  ];
}
