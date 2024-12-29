import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Custom Design and Development | Excel Development Services",
  description:
    "Professional Excel custom design and development services across Australia. Specializing in custom workbooks, VBA development, and Excel integration solutions.",

  keywords: [
    // Core service keywords
    "Excel custom design and development",
    // "Excel design services",
    // "Excel VBA development",
    // "Excel programming services",
    // "Excel integration solutions",

    // // Feature-specific
    // "custom Excel workbooks",
    // "Excel template development",
    // "Excel data manipulation",
    // "Excel reporting solutions",
    // "Excel macro development",

    // // Integration-focused
    // "Excel third party integration",
    // "Excel SQL integration",
    // "Excel Azure integration",
    // "Excel Office integration",
    // "Excel database connection",

    // // Business solutions
    // "Excel business automation",
    // "Excel process automation",
    // "Excel workflow solutions",
    // "Excel business solutions",
    // "Excel efficiency tools",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
