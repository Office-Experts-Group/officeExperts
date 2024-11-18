import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Microsoft Office Consulting Northern Rivers NSW | Office Solutions Northern Rivers NSW",
  description:
    "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specializing in comprehensive Office solutions, integration, and business automation.",

  openGraph: {
    title:
      "Office Experts Group Northern Rivers NSW | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specializing in comprehensive Office solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/",
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

  keywords: [
    // Location-specific
    "Microsoft Office consulting Northern Rivers NSW",
    "Office solutions Northern Rivers NSW",
    "Office programmers Northern Rivers NSW",
    "Office consultants Northern Rivers NSW",
    "Excel experts Northern Rivers NSW",
    "Access database specialists Northern Rivers NSW",
    "Word consultants Northern Rivers NSW",
    "Office 365 migration Northern Rivers NSW",

    // Service-specific
    "custom Office development",
    "Office business automation",
    "Office VBA development",
    "Office workflow automation",
    "Office template solutions",
    "Office cloud migration",
    "Office SharePoint integration",
    "Office database solutions",
    "Office Azure integration",

    // Industry-specific
    "corporate Office solutions NSW",
    "government Office services NSW",
    "enterprise Office consulting",
    "business Office automation Northern Rivers",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Office Experts Group Northern Rivers NSW | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specializing in comprehensive Office solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/",
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
