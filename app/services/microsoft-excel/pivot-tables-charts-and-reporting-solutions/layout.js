import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Pivot Tables | Charts and Reporting Solutions",
  description:
    "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customized reporting solutions.",

  openGraph: {
    title: "Pivot Tables | Charts and Reporting Solutions",
    description:
      "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customized reporting solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/",
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
    // Core pivot table services
    "Excel pivot tables",
    "pivot table consulting",
    "Excel pivot charts",
    "pivot table training",
    "custom pivot tables",

    // Reporting focused
    "Excel reporting solutions",
    "business reporting Excel",
    "advanced Excel reports",
    "Excel dashboard creation",
    "automated Excel reporting",

    // Service-specific long tail
    "pivot table development",
    "custom Excel charting",
    "Excel data visualization",
    "Excel VBA reporting",
    "Power Pivot solutions",

    // Industry-specific
    "corporate Excel reporting",
    "business analytics Excel",
    "financial reporting Excel",
    "sales dashboard Excel",

    // Location-based
    "pivot table experts Australia",
    "Excel reporting consultants",
    "Excel charting services",
    "pivot table specialists",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Pivot Tables | Charts and Reporting Solutions",
    description:
      "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customized reporting solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/",
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
