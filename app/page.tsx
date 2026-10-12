import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { getCaseStudies } from "@/lib/content";
import { docs } from "@/lib/docs";

export const metadata: Metadata = {
  title: { absolute: "Piotr Krzysztof Lis - Software, Written Deliberately" },
  description:
    "Selected work and project documentation by Piotr Krzysztof: Quantum Pipeline, Honeywatch, colorgen, FSGA, an async data collector and Machine Learning in F1.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Piotr Krzysztof", url: "/" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://piotrkrzysztof.dev/#piotr",
  name: "Piotr Krzysztof Lis",
  alternateName: "Piotr Krzysztof",
  url: "https://piotrkrzysztof.dev",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/straightchlorine",
    "https://codeberg.org/piotrkrzysztof",
    "https://pypi.org/user/straightchlorine",
    "https://hub.docker.com/u/straightchlorine",
    "https://www.linkedin.com/in/straightchlorine"
  ],
};

export default function Home() {
  const studies = getCaseStudies();

  return (
    <div className="max-w-2xl mx-auto px-6 pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Piotr Krzysztof</h1>
      <p className="text-xl text-brown-muted mb-16">
        Software, written deliberately.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Selected work</h2>
      {studies.length > 0 ? (
        <div className="mb-16 space-y-1">
          {studies.map((study) => (
            <div key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="text-brown-link underline decoration-brown-link/30 hover:decoration-brown-link transition-colors text-lg"
              >
                {study.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-brown-muted mb-16">Coming soon.</p>
      )}

      <h2 className="text-2xl font-semibold mb-6">Project documentation</h2>
      <ul className="mb-16 space-y-1">
        {docs.map(([name, href, blurb]) => (
          <li key={href}>
            <a
              href={href}
              className="text-brown-link underline decoration-brown-link/30 hover:decoration-brown-link transition-colors text-lg"
            >
              {name}
            </a>
            <span className="text-brown-muted"> - {blurb}</span>
          </li>
        ))}
      </ul>

      <hr className="border-divider mb-8" />

      <Nav />
    </div>
  );
}
