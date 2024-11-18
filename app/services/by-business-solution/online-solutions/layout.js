import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Online Solution | Microsoft Office | Office Expert Australia",
  description:
    "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 10 28 10",

  // OpenGraph
  openGraph: {
    title: "Online Solutions",
    description:
      "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 10 28 10",
    url: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions/",
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
    // Core online services
    "online spreadsheet solutions",
    "online database connectivity",
    "web application development",
    "cloud data solutions",
    "online data management",

    // Location-based
    "online solutions Sydney",
    "web services Melbourne",
    "cloud solutions Brisbane",
    "online database Perth",

    // Service-specific long tail
    "SharePoint online integration",
    "Office 365 web services",
    "ASP.NET web applications",
    "Azure cloud solutions",
    "Google Docs integration",

    // Industry-specific
    "business online solutions",
    "enterprise web services",
    "corporate cloud solutions",
    "remote data access",

    // Technology combinations
    "Excel online connectivity",
    "Word web integration",
    "Access online database",
    "PowerPoint web sharing",
    "Outlook online solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Online Solutions | Microsoft Office Solutions",
    description:
      "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 10 28 10",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/online-solutions/",
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
