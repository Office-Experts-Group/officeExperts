import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Excel and Access Database Experts Sydney | Database Development | Excel Development",
  description:
    "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-sydney/",
  },

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Excel consulting Sydney",
    "Access specialists Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/excel-and-access-experts-sydney/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
