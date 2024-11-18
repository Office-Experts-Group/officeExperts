import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word Upgrades and Migration | Office Expert Australia",
  description:
    "Expert Microsoft Word upgrade and migration services. Our team helps ensure smooth transitions between versions, fixes formatting issues, and handles PDF conversions professionally.",

  // OpenGraph
  openGraph: {
    title: "Word Upgrades and Migration Services",
    description:
      "Professional Microsoft Word upgrade and migration services. Specialists in version transitions, formatting fixes, and PDF conversions.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/upgrades-and-migration/",
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
    "Word upgrade services",
    "Word migration services",
    "Microsoft Word version upgrade",
    "Word document conversion",
    "PDF to Word conversion",

    // Specific services
    "Word template migration",
    "Word macro upgrade",
    "Word formatting fixes",
    "Word version compatibility",
    "Word document repair",

    // Problem-specific
    "fix Word formatting issues",
    "repair broken Word documents",
    "Word version compatibility issues",
    "Word document recovery",
    "Word template repair",

    // Location-based
    "Word migration services Australia",
    "Word upgrade consultants Sydney",
    "Word document experts Melbourne",
    "Microsoft Word specialists Brisbane",

    // Business solutions
    "business Word migration",
    "enterprise Word upgrade",
    "corporate Word solutions",
    "professional Word services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Upgrades and Migration Services",
    description:
      "Professional Microsoft Word upgrade and migration services. Specialists in version transitions, formatting fixes, and PDF conversions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/upgrades-and-migration/",
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
