import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Upgrades And Migration | Office Experts Australia",
  description:
    "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",

  keywords: [
    "microsoft office upgrades and migration",
    // Core upgrade services
    // "office upgrade services",
    // "microsoft office migration",
    // "office 365 upgrade",
    // "office version upgrade",

    // // Problem-specific
    // "fix office compatibility issues",
    // "office workbook migration",
    // "database upgrade services",
    // "office document conversion",

    // // Solution-specific
    // "office version compatibility",
    // "office automation upgrade",
    // "legacy office migration",
    // "office cloud migration",

    // // Location-based
    // "office upgrade services australia",
    // "microsoft office migration sydney",
    // "office 365 migration melbourne",
    // "office upgrade consultants brisbane",

    // // Service combinations
    // "office and database migration",
    // "excel workbook upgrade",
    // "access database migration",
    // "vba code upgrade services",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
