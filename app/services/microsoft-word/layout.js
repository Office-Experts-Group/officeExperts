import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Services | Word Experts Australia",
  description:
    "Professional Microsoft Word consulting services specializing in templates, document design, forms, accessibility and corporate solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Services",
    description:
      "Professional Microsoft Word consulting services specializing in templates, document design, forms, accessibility and corporate solutions across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/",
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
    // Core Word services
    "Microsoft Word consulting",
    "Word template design",
    "corporate Word templates",
    "Word document solutions",
    "Word accessibility services",

    // Location-based
    "Word consultants Sydney",
    "Word experts Melbourne",
    "Word specialists Brisbane",
    "Word consultants Perth",

    // Service-specific long tail
    "Word VBA development",
    "Word form creation",
    "Word document automation",
    "Word corporate branding",
    "Word template conversion",

    // Industry-specific
    "government Word solutions",
    "corporate Word templates",
    "enterprise Word consulting",
    "business Word automation",

    // Feature-specific
    "Word popup forms",
    "Word quick parts",
    "Word document accessibility",
    "Word custom toolbars",
    "Word template migration",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Services",
    description:
      "Professional Microsoft Word consulting services specializing in templates, document design, forms, accessibility and corporate solutions across Australia.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-word/",
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
