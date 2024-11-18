import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Government Department Word Solutions",
  description:
    "Expert Microsoft Word document design and consulting services for government departments. Specializing in accessible documents, templates, and corporate identity protection for state and federal agencies.",

  openGraph: {
    title: "Government Department Word Solutions",
    description:
      "Expert Microsoft Word document design and consulting services for government departments. Specializing in accessible documents, templates, and corporate identity protection for state and federal agencies.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/government-departments/",
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

  keywords: [
    // Core government services
    "government document solutions",
    "government word templates",
    "federal government word services",
    "state government word services",
    "accessible government documents",

    // Service-specific
    "government document design",
    "government template creation",
    "government accessibility compliance",
    "government corporate identity",
    "government document automation",

    // Location-based
    "australian government word services",
    "federal department word solutions",
    "state department word solutions",

    // Technical aspects
    "government document accessibility",
    "government template management",
    "government document standards",
    "government compliant documents",
    "government document formatting",

    // Specific solutions
    "government master templates",
    "government sub templates",
    "government document controls",
    "government template automation",
    "government document consistency",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Government Department Word Solutions",
    description:
      "Expert Microsoft Word document design and consulting services for government departments. Specializing in accessible documents, templates, and corporate identity protection for state and federal agencies.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/government-departments/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
