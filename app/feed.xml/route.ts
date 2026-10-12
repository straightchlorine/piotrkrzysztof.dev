import { getBlogPosts } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://piotrkrzysztof.dev";
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = getBlogPosts()
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${base}/blog/${p.slug}</link>
<guid>${base}/blog/${p.slug}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.description)}</description>
</item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Piotr Krzysztof</title>
<link>${base}</link>
<atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
<language>en</language>
<description>Notes on private and commercial projects. To the only God, be honour and glory for ever and ever.</description>
${items}
</channel></rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
