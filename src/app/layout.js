/**
 * Root Layout (Server Component)
 * -------------------------------
 * This must be a Server Component to use `metadata` export.
 * We use the Providers component to wrap children with
 * client-side context providers.
 */

import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";
import "./globals.css";

// SEO Metadata - only works in Server Components
export const metadata = {
  title: "Ali Reza Habibi | Software Engineer",
  description:
    "Frontend Software Engineer with 5+ years of experience building digital experiences across web, mobile & desktop.",
  keywords: "software engineer, frontend developer, react, next.js, portfolio",
  authors: [{ name: "Ali Reza Habibi" }],

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "Ali Reza Habibi | Software Engineer",
    description: "Frontend Software Engineer with 5+ years of experience",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Providers wraps children with client-side ThemeContext */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
