import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Experts Wollongong",
  description:
    "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Wollongong",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
  },

  // Additional metadata
  keywords: [
    // Location based
    "microsoft office consultants wollongong",
    "excel consulting wollongong",
    "access database specialists wollongong",
    "word experts wollongong",
    "office 365 consulting wollongong",
    "powerpoint designers wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Wollongong",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
