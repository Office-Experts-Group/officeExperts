import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Business Solutions | Custom Office Development Services Australia",
  description:
    "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Business Solutions & Development Services",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/",
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
    // Core business solutions
    "office business solutions",
    "custom office development",
    "vba macro development",
    "database solutions australia",
    "office integration services",
    "sql server integration",

    // Service-specific
    "office automation solutions",
    "custom add-in development",
    "cloud based office solutions",
    "office upgrade services",
    "office migration services",

    // Location-based
    "office solutions sydney",
    "office development melbourne",
    "office consultants brisbane",
    "office experts perth",

    // Technology combinations
    "office azure integration",
    "office sql development",
    "office cloud migration",
    "office 365 solutions",
    "sharepoint integration",
    "office automation systems",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Office Business Solutions & Development Services",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/by-business-solution/",
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
