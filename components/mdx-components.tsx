import type { MDXComponents } from "mdx/types";

function TLDR({ children }: { children: React.ReactNode }) {
  return (
    <details className="mb-8 border border-divider rounded bg-brown/[0.03]">
      <summary className="cursor-pointer px-5 py-3 text-brown-muted font-semibold select-none hover:text-brown transition-colors">
        TL;DR
      </summary>
      <div className="px-5 pb-4 pt-1">{children}</div>
    </details>
  );
}

export const mdxComponents: MDXComponents = {
  TLDR,
  h1: (props) => (
    <h1 className="text-4xl font-bold mt-12 mb-4 text-brown leading-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-10 mb-3 text-brown" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-8 mb-2 text-brown" {...props} />
  ),
  p: (props) => <p className="mb-5 leading-[1.7]" {...props} />,
  a: (props) => (
    <a className="text-brown-link underline decoration-brown-link/30 hover:decoration-brown-link transition-colors" {...props} />
  ),
  ul: (props) => <ul className="list-disc pl-6 mb-5 space-y-1" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-5 space-y-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 border-divider pl-5 italic text-brown-muted mb-5" {...props} />
  ),
  code: (props) => (
    <code className="bg-divider/40 px-1.5 py-0.5 rounded text-[0.72em]" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-brown/5 p-4 rounded overflow-x-auto mb-5 text-[0.72em]" {...props} />
  ),
  hr: () => <hr className="border-divider my-10" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded my-6 max-w-full" alt="" {...props} />
  ),
};
