import { Breadcrumb } from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Piotr Krzysztof.",
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
          <a
            href="/work"
            className="text-brown-link underline decoration-brown-link/30 hover:decoration-brown-link transition-colors"
          >
            Work
          </a>{" "}
          section.
        </p>
      </div>
      <p className="mt-12 text-brown-muted">
        <a
          href="https://github.com/piotrkrzysztof"
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
