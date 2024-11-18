import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Word Remove Repetition | Word Increase Productivity | Word Document Services | Word Experts",
  description:
    "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",

  // OpenGraph
  openGraph: {
    title: "Word Remove Repetition and Increase Productivity",
    description:
      "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
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
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word automation services",
    "document productivity solutions",
    "Microsoft Word efficiency",
    "document automation tools",
    "Word template automation",

    // Features
    "automated document creation",
    "document element automation",
    "Word document efficiency",
    "business document automation",
    "Word process automation",

    // Benefits
    "reduce document repetition",
    "increase Word productivity",
    "improve document efficiency",
    "streamline Word processes",
    "automate Word tasks",

    // Business focus
    "business document solutions",
    "corporate Word automation",
    "enterprise Word solutions",
    "professional Word services",
    "document productivity consulting",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Remove Repetition and Increase Productivity",
    description:
      "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
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
