import type { MetadataRoute } from "next";
import { getBlogPosts, getCaseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://piotrkrzysztof.dev";

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const caseStudies = getCaseStudies().map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    ...blogPosts,
    ...caseStudies,
  ];
}
