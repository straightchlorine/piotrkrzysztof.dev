import type { Metadata } from "next";
import { cormorant } from "@/lib/fonts";
import { Footer } from "@/components/footer";
import "katex/dist/katex.min.css";
import "./hljs.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://piotrkrzysztof.dev"),
  title: {
    default: "Piotr Krzysztof",
    template: "%s | Piotr Krzysztof",
  },
  description: "Piotr Krzysztof Lis - software engineer. Notes on private and commercial projects built along the way.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Piotr Krzysztof",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="bg-parchment text-brown font-[family-name:var(--font-cormorant)] text-lg leading-relaxed min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-parchment focus:px-4 focus:py-2 focus:text-brown focus:underline">
          Skip to content
        </a>
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
