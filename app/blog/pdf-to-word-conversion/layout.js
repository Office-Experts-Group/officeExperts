import React from "react";

export const metadata = {
  // Basic metadata
  title: "PDF to Word Conversion That Works for Business | Word Experts",
  description:
    "Discover why professional PDF to Word conversion matters for business. Learn about accuracy, security, and formatting that free converters can't deliver.",

  // OpenGraph
  openGraph: {
    title: "PDF to Word Conversion That Works for Business",
    description:
      "Discover why professional PDF to Word conversion matters for business. Learn about accuracy, security, and formatting that free converters can't deliver.",
    url: "https://www.wordexperts.com.au/blog/pdf-to-word-conversion",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: ["PDF to Word conversion"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "PDF to Word Conversion That Works for Business",
    description:
      "Discover why professional PDF to Word conversion matters for business. Learn about accuracy, security, and formatting that free converters can't deliver.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/pdf-to-word-conversion",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

// Bucky Larson
