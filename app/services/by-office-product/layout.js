import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Product Services | Microsoft Office Solutions Australia",
  description:
    "Comprehensive Microsoft Office consultancy and assistance services across Australia. Specializing in Excel, Word, Access, PowerPoint, and SharePoint solutions.",

  keywords: [
    // Core services
    "Microsoft Office consultancy",
    // "Office solutions Australia",
    // "Microsoft Excel services",
    // "Microsoft Word services",
    // "Microsoft Access services",
    // "PowerPoint consulting",

    // // Location-based
    // "Microsoft Office consultants Sydney",
    // "Microsoft Office solutions Melbourne",
    // "Microsoft Office consultants Brisbane",
    // "Microsoft Office specialists Perth",

    // // Service-specific
    // "Excel spreadsheet development",
    // "Word document automation",
    // "Access database solutions",
    // "PowerPoint presentation design",
    // "Office product integration",
    // "SharePoint consulting",

    // // Industry-specific
    // "corporate Office solutions",
    // "enterprise Office consulting",
    // "business Office integration",
    // "Office automation services",

    // // Technology combinations
    // "Microsoft Office 365 migration",
    // "Microsoft Office cloud solutions",
    // "Microsoft Office product support",
    // "Microsoft Office software training",
  ],
  canonical: "https://www.officeexperts.com.au/services/by-office-product/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
