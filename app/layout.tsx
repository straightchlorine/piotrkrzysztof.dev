import type { Metadata } from "next";
import { cormorant } from "@/lib/fonts";
import { Footer } from "@/components/footer";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://piotrkrzysztof.dev"),
  title: {
    default: "Piotr Krzysztof",
    template: "%s | Piotr Krzysztof",
  },
  description: "Software, written deliberately.",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
