import React from "react";

export const metadata = {
  // Basic metadata
  title: "How to Rebrand Your Business Documents Without Starting From Scratch",
  description:
    "Learn how to efficiently rebrand your business documents without rebuilding everything. Discover smart strategies for updating logos, colors, and brand elements while preserving your existing document structure and saving time.",

  // OpenGraph
  openGraph: {
    title:
      "How to Rebrand Your Business Documents Without Starting From Scratch",
    description:
      "Learn how to efficiently rebrand your business documents without rebuilding everything. Discover smart strategies for updating logos, colors, and brand elements while preserving your existing document structure and saving time.",
    url: "https://www.wordexperts.com.au/blog/document-rebranding",
    siteName: "Word Experts Australia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["document rebranding"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title:
      "How to Rebrand Your Business Documents Without Starting From Scratch",
    description:
      "Learn how to efficiently rebrand your business documents without rebuilding everything. Discover smart strategies for updating logos, colors, and brand elements while preserving your existing document structure and saving time.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/document-rebranding",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
