import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Upgrades And Migration | Office Experts Australia",
  description:
    "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",

  // OpenGraph
  openGraph: {
    title: "Upgrades and Migration",
    description:
      "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",
    url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/",
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
    // Core upgrade services
    "office upgrade services",
    "microsoft office migration",
    "office 365 upgrade",
    "office version upgrade",

    // Problem-specific
    "fix office compatibility issues",
    "office workbook migration",
    "database upgrade services",
    "office document conversion",

    // Solution-specific
    "office version compatibility",
    "office automation upgrade",
    "legacy office migration",
    "office cloud migration",

    // Location-based
    "office upgrade services australia",
    "microsoft office migration sydney",
    "office 365 migration melbourne",
    "office upgrade consultants brisbane",

    // Service combinations
    "office and database migration",
    "excel workbook upgrade",
    "access database migration",
    "vba code upgrade services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Upgrades and Migration",
    description:
      "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/",
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
