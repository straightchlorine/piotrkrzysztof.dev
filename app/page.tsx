import Link from "next/link";
import { Nav } from "@/components/nav";
import { getCaseStudies } from "@/lib/content";

export default function Home() {
  const studies = getCaseStudies();

  return (
    <div className="max-w-2xl mx-auto px-6 pt-24 pb-16">
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

      <hr className="border-divider mb-8" />

      <Nav />
    </div>
  );
}
