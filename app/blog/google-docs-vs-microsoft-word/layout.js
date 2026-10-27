import React from "react";

export const metadata = {
  // Basic metadata
  title: "Google Docs vs Microsoft Word",
  description:
    "Compare Google Docs and Microsoft Word for enterprise use. Discover why many organisations migrate from Google Docs to Word for advanced features.",

  // OpenGraph
  openGraph: {
    title: "Google Docs vs Microsoft Word",
    description:
      "Compare Google Docs and Microsoft Word for enterprise use. Discover why many organisations migrate from Google Docs to Word for advanced features, compliance, automation, and scalability needs.",
    url: "https://www.wordexperts.com.au/blog/google-docs-vs-microsoft-word",
    siteName: "Word Experts Australia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Australia Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["google docs vs microsoft word"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title:
      "Google Docs vs Microsoft Word: Which Is Best for Enterprise Workflows?",
    description:
      "Compare Google Docs and Microsoft Word for enterprise use. Discover why many organizations migrate from Google Docs to Word for advanced features, compliance, automation, and scalability needs.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/google-docs-vs-microsoft-word",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
