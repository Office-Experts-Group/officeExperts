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
    url: "https://www.wordexperts.com.au/services/microsoft-word/corporate-identity",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word corporate identity creation",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/corporate-identity",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
