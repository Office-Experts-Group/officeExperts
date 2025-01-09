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
  },

  keywords: [
    // Location-specific
    "Microsoft Office consulting Northern Rivers NSW",
    "Office solutions Northern Rivers NSW",
    "Office programmers Northern Rivers NSW",
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

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
