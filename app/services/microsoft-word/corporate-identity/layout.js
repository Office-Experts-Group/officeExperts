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
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word corporate identity",
    "Word template protection",
    "corporate document templates",
    "Word formatting consistency",
    "document branding solutions",

    // Service-specific
    "Word template design",
    "corporate document control",
    "Word document standards",
    "brand consistency templates",
    "document formatting services",

    // Business focus
    "business document solutions",
    "corporate identity management",
    "Word business templates",
    "document brand protection",
    "template design services",

    // Professional services
    "professional Word templates",
    "corporate Word solutions",
    "document consistency tools",
    "template management system",
    "brand compliant documents",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Corporate Identity Solutions | Word Document Protection",
    description:
      "Professional Word template solutions for consistent formatting and corporate identity protection. Expert document template design services.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/corporate-identity/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
