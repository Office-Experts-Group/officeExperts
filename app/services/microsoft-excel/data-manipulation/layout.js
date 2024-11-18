import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Data Manipulation | Microsoft Excel | Office Experts",
  description:
    "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specializing in CSV, XML, SQL, and JSON data handling.",

  openGraph: {
    title: "Excel Data Manipulation Services",
    description:
      "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specializing in CSV, XML, SQL, and JSON data handling.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/data-manipulation/",
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
    // Core data manipulation
    "Excel data manipulation",
    "automated data processing",
    "bulk data conversion",
    "data formatting automation",
    "Excel VBA data processing",

    // File format specific
    "CSV data manipulation",
    "XML data processing",
    "SQL data conversion",
    "JSON data handling",

    // Service-specific
    "data import export services",
    "automated data conversion",
    "batch data processing",
    "Excel automation services",
    "data parsing solutions",

    // Business focus
    "business data automation",
    "enterprise data processing",
    "corporate data solutions",
    "data manipulation consulting",

    // Location-specific
    "Excel data services Sydney",
    "data manipulation Melbourne",
    "Excel automation Brisbane",
    "data processing Perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Data Manipulation Services",
    description:
      "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specializing in CSV, XML, SQL, and JSON data handling.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/data-manipulation/",
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
