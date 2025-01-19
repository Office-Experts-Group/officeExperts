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
    url: "https://www.wordexperts.com.au/services/microsoft-word/corporate-identity/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word corporate identity creation",
    // "Word template protection",
    // "corporate document templates",
    // "Word formatting consistency",
    // "document branding solutions",

    // // Service-specific
    // "Word template design",
    // "corporate document control",
    // "Word document standards",
    // "brand consistency templates",
    // "document formatting services",

    // // Business focus
    // "business document solutions",
    // "corporate identity management",
    // "Word business templates",
    // "document brand protection",
    // "template design services",

    // // Professional services
    // "professional Word templates",
    // "corporate Word solutions",
    // "document consistency tools",
    // "template management system",
    // "brand compliant documents",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/corporate-identity/",
    languages: {
      "en-AU": "/services/microsoft-word/corporate-identity/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
