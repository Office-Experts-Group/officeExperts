import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Formulas and Custom Formulas | Office Expert Australia",
  description:
    "Expert assistance with Excel formulas and custom formula development. Our specialists help optimise formula usage and create custom solutions for complex requirements.",

  keywords: [
    // Core formula keywords
    "Excel formula help",
    // "custom Excel formulas",
    // "Excel formula development",
    // "complex Excel formulas",
    // "Excel formula optimization",

    // // Technical keywords
    // "Excel VBA formulas",
    // "Excel formula functions",
    // "Excel formula automation",
    // "Excel formula programming",
    // "Excel custom functions",

    // // Problem-focused
    // "Excel formula troubleshooting",
    // "Excel formula maintenance",
    // "Excel formula performance",
    // "Excel formula crashes",
    // "Excel formula corruption",

    // // Service-specific
    // "Excel formula consulting",
    // "Excel formula experts",
    // "Excel formula support",
    // "Excel formula training",
    // "Excel formula solutions",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
