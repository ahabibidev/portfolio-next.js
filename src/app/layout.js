import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";
import "./globals.css";
import JsonLd from "./json-ld";

export const metadata = {
  // ✅ Title — put your name FIRST (most important for name searches)
  title: "Ali Reza Habibi — Software Engineer | Full-Stack Developer",
  description:
    "Ali Reza Habibi — Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development. Building seamless digital experiences across web, mobile, and desktop using React, Next.js, and TypeScript.",

  authors: [{ name: "Ali Reza Habibi", url: "https://ahabibi.dev" }],
  creator: "Ali Reza Habibi",
  publisher: "Ali Reza Habibi",

  // ✅ Canonical URL — prevents duplicate content issues
  alternates: {
    canonical: "https://ahabibi.dev",
  },

  icons: {
    icon: "/favicon.svg",
  },

  // ✅ Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Ali Reza Habibi — Software Engineer",
    description:
      "Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development.",
    type: "website",
    url: "https://ahabibi.dev",
    siteName: "Ali Reza Habibi",
    locale: "en_US",
    images: [
      {
        url: "https://ahabibi.dev/og-image.png", // ← CREATE THIS (1200x630px)
        width: 1200,
        height: 627,
        alt: "Ali Reza Habibi — Software Engineer",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ali Reza Habibi — Software Engineer",
    description:
      "Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development.",
    images: ["https://ahabibi.dev/og-image.png"],
    creator: "@ahabibidev", // ← replace if you have one
  },

  // ✅ Tell Google this is YOUR personal page
  metadataBase: new URL("https://ahabibi.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <JsonLd />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
