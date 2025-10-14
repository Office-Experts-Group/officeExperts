import React from "react";

export const metadata = {
  // Basic metadata
  title: "Corporate Identity Solutions | Office Experts Group",
  description:
    "Professional Word template solutions for consistent formatting and corporate identity protection. Expert document template design services.",

  // OpenGraph
  openGraph: {
    title: "Corporate Identity Solutions | Office Experts Group",
    description:
      "Professional Word template solutions for consistent formatting and corporate identity protection. Expert document template design services.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
    siteName: "Office Experts Group",
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
  keywords: [
    // Core services
    "Word corporate identity creation",
  ],

  alternates: {
    canonical: "https://www.wordexperts.com.au/corporate-identity",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Corporate Identity Solutions | Office Experts Group",
    description:
      "Professional Word template solutions for consistent formatting and corporate identity protection. Expert document template design services.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
