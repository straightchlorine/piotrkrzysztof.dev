import Link from "next/link";

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="flex gap-6 text-brown-muted text-base">
      <Link href="/blog" className="hover:text-brown transition-colors">Blog</Link>
      <Link href="/work" className="hover:text-brown transition-colors">Work</Link>
      <Link href="/about" className="hover:text-brown transition-colors">About</Link>
    </nav>
  );
}

export function Breadcrumb({ section }: { section: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-brown-muted text-sm tracking-wide mb-12">
      <ol className="flex items-center gap-0">
        <li>
          <Link href="/" className="hover:text-brown transition-colors">Piotr Krzysztof</Link>
        </li>
        <li aria-hidden="true" className="mx-2">/</li>
        <li aria-current="page">{section}</li>
      </ol>
    </nav>
  );
}
