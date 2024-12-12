import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Data Manipulation | Microsoft Excel | Office Experts",
  description:
    "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specializing in CSV, XML, SQL, and JSON data handling.",

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

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/data-manipulation/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
