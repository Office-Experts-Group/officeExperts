import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Excel & Access Consulting | Office Solutions | Excel & Access Experts Central Coast NSW",
  description:
    "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specializing in comprehensive database solutions, Excel automation, and business process optimization.",

  // OpenGraph
  openGraph: {
    title:
      "Excel & Access Experts Group | Microsoft Excel & Access Consulting Central Coast NSW",
    description:
      "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specializing in comprehensive database solutions, Excel automation, and business process optimization.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw/",
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
    "Excel consultants Central Coast NSW",
    "Access database specialists Central Coast NSW",
    "Excel programmers Central Coast NSW",
    "Access solutions Central Coast NSW",
    "Excel automation Central Coast NSW",

    // Location-based
    "Excel experts Central Coast",
    "Access consultants NSW",
    "Database specialists Central Coast",
    "Excel solutions NSW",

    // Service-specific long tail
    "custom Excel development Central Coast",
    "Access database design NSW",
    "Excel VBA development Central Coast",
    "Access automation Central Coast NSW",
    "Excel template solutions Central Coast",

    // Industry-specific
    "corporate Excel solutions Central Coast",
    "business database services NSW",
    "enterprise Excel consulting Central Coast",
    "business Excel automation NSW",

    // Technology combinations
    "Excel SharePoint integration Central Coast",
    "Access Azure solutions NSW",
    "Excel cloud migration Central Coast",
    "Access business solutions NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Excel & Access Experts Group | Microsoft Excel & Access Consulting Central Coast NSW",
    description:
      "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specializing in comprehensive database solutions, Excel automation, and business process optimization.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw/",
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
