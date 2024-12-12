import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Upgrades and Migration | Office Expert Australia",
  description:
    "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimize performance, and ensure smooth transitions between versions.",
  keywords: [
    // Core upgrade services
    "Excel migration services",
    "Excel upgrade solutions",
    "Excel version compatibility",
    "Excel workbook optimization",

    // Specific issues
    "slow Excel workbooks",
    "Excel compatibility issues",
    "Excel VBA migration",
    "Excel macro upgrades",
    "Excel 32-bit to 64-bit",

    // Solutions
    "Excel performance optimization",
    "Excel workbook repair",
    "Excel database migration",
    "Excel cloud migration",
    "Excel version upgrade",

    // Business focus
    "business Excel solutions",
    "enterprise Excel migration",
    "corporate Excel upgrades",
    "Excel consulting services",

    // Location specific
    "Excel migration Australia",
    "Excel upgrade services Sydney",
    "Excel consultants Melbourne",
    "Excel experts Brisbane",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
