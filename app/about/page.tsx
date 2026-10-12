import Link from "next/link";
import { Breadcrumb } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Piotr: Software and Open Source",
  description:
    "I write software and try to do it carefully. I also maintain a few open-source projects, mostly to study things I do not understand well yet. Email, GitHub.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Piotr Krzysztof",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      <Breadcrumb section="about" />
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="space-y-5 leading-[1.7]">
        <p>
          I&rsquo;m Piotr. I write software and try to do it carefully.
        </p>
        <p>
          Outside of work, I maintain a few open-source projects &mdash; mostly
          as a way to study things I don&rsquo;t understand well yet. Some of
          them are in the{" "}
          <Link
            href="/work"
            className="text-brown-link underline decoration-brown-link/30 hover:decoration-brown-link transition-colors"
          >
            Work
          </Link>{" "}
          section.
        </p>
      </div>
      <p className="mt-12 text-brown-muted">
        <a
          href="https://github.com/straightchlorine"
          className="hover:text-brown transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        {" "}&middot;{" "}
        <a
          href="https://codeberg.org/piotrkrzysztof"
          className="hover:text-brown transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          Codeberg
        </a>
        {" "}&middot;{" "}
        <a
          href="mailto:piotr.blog@codextechnologies.org"
          className="hover:text-brown transition-colors"
        >
          Email
        </a>
      </p>
    </div>
  );
}
