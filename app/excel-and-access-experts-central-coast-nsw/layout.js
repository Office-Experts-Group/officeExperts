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
  },

  // Additional metadata
  keywords: [
    // Core services
    "Excel consultants Central Coast NSW",
    "Access database specialists Central Coast NSW",
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

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
