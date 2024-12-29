import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word/Corporate Global Template Solution / Corporate Governance",
  description:
    "Our team of Word design experts will deliver your document templates with consistent formatting, protecting your corporate identity and allowing your team to focus on content.",

  // OpenGraph
  openGraph: {
    title: "Corporate Identity Solutions | Word Document Protection",
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
  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/corporate-identity/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
