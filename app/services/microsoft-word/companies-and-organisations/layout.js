import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Companies and Organizations | Word Document Services",
  description:
    "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",

  // OpenGraph
  openGraph: {
    title: "Companies and Organizations | Corporate Word Solutions",
    description:
      "Expert Word design team delivering versatile templates for companies and organizations. Protect corporate identity and reduce costs with in-house report generation capabilities.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/",
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
    type: "article",
  },

  // Keywords extracted and optimized from content
  keywords: [
    "word template design",
    "corporate document solutions",
    "microsoft word templates",
    "document branding",
    "corporate identity protection",
    "word document formatting",
    "inhouse report generation",
    "corporate branding guidelines",
    "document automation",
    "word template consulting",
    "corporate style management",
    "document standardization",
    "business document templates",
    "word formatting control",
    "corporate document management",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Companies and Organizations | Corporate Word Solutions",
    description:
      "Expert Word design team delivering versatile templates for companies and organizations. Protect corporate identity and reduce costs with in-house report generation capabilities.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/",
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
