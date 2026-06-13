import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  content: string;
}

function readMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

function toDateString(value: unknown): string {
  // YAML parses an unquoted `date: 2026-06-07` into a Date object; normalise
  // to a stable YYYY-MM-DD string so server and client render identically
  // (avoids the timezone-dependent hydration mismatch).
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === "string" ? value : String(value ?? "");
}

export function getBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const { data, content } = readMdxFile(path.join(dir, file));
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        date: toDateString(data.date),
        description: data.description,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const filePath = path.join(contentDir, "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const { data, content } = readMdxFile(filePath);
  return {
    slug,
    title: data.title,
    date: toDateString(data.date),
    description: data.description,
    content,
  };
}

export function getCaseStudies(): CaseStudy[] {
  const dir = path.join(contentDir, "work");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const { data, content } = readMdxFile(path.join(dir, file));
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title,
      description: data.description,
      content,
    };
  });
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const filePath = path.join(contentDir, "work", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const { data, content } = readMdxFile(filePath);
  return {
    slug,
    title: data.title,
    description: data.description,
    content,
  };
}
