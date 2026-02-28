import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex gap-6 text-brown-muted text-base">
      <Link href="/work" className="hover:text-brown transition-colors">Work</Link>
      <Link href="/about" className="hover:text-brown transition-colors">About</Link>
      <Link href="/blog" className="hover:text-brown transition-colors">Blog</Link>
    </nav>
  );
}

export function Breadcrumb({ section }: { section: string }) {
  return (
    <div className="text-brown-muted text-sm tracking-wide mb-12">
      <Link href="/" className="hover:text-brown transition-colors">Piotr Krzysztof</Link>
      <span className="mx-2">/</span>
      <span>{section}</span>
    </div>
  );
}
