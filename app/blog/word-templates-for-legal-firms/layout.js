import React from "react";

export const metadata = {
  // Basic metadata
  title: "Creating Word Templates for Legal Firms: Best Practices",
  description:
    "Create professional Word templates for legal firms. Discover best practices for reducing errors, ensuring consistency, and protecting client confidentiality.",

  // OpenGraph
  openGraph: {
    title: "Creating Word Templates for Legal Firms: Best Practices",
    description:
      "Create professional Word templates for legal firms. Discover best practices for reducing errors, ensuring consistency, and protecting client confidentiality.",
    url: "https://www.wordexperts.com.au/blog/word-templates-for-legal-firms",
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
    type: "website",
  },

  // Additional metadata
  keywords: ["Word templates for legal firms"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Creating Word Templates for Legal Firms: Best Practices",
    description:
      "Create professional Word templates for legal firms. Discover best practices for reducing errors, ensuring consistency, and protecting client confidentiality.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.wordexperts.com.au/blog/word-templates-for-legal-firms",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
