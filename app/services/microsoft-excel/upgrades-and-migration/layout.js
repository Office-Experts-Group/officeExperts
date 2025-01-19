import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Upgrades and Migration | Office Experts Group",
  description:
    "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimise performance, and ensure smooth transitions between versions.",
  keywords: [
    // "Excel workbook optimisation",
    // Core upgrade services
    "Excel migration services",
    "Excel upgrade solutions",
    // "Excel version compatibility",

    // // Specific issues
    // "slow Excel workbooks",
    // "Excel compatibility issues",
    // "Excel VBA migration",
    // "Excel macro upgrades",
    // "Excel 32-bit to 64-bit",

    // // Solutions
    // "Excel performance optimization",
    // "Excel workbook repair",
    // "Excel database migration",
    // "Excel cloud migration",
    // "Excel version upgrade",

    // // Business focus
    // "business Excel solutions",
    // "enterprise Excel migration",
    // "corporate Excel upgrades",
    // "Excel consulting services",

    // // Location specific
    // "Excel migration Australia",
    // "Excel upgrade services Sydney",
    // "Excel consultants Melbourne",
    // "Excel experts Brisbane",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-excel/upgrades-and-migration",
    languages: {
      "en-AU": "/services/microsoft-excel/upgrades-and-migration",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
