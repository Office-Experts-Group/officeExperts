import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Business Solutions & Custom Office Development Services | Office Experts Group",
  description:
    "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Business Solutions & Custom Office Development Services | Office Experts Group",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    url: "https://www.officeexperts.com.au/services/by-business-solution",
  },

  // Additional metadata
  keywords: [
    // Core business solutions
    "microsoft office business solutions",
    // "custom office development",
    // "vba macro development",
    // "database solutions australia",
    // "office integration services",
    // "sql server integration",

    // // Service-specific
    // "office automation solutions",
    // "custom add-in development",
    // "cloud based office solutions",
    // "office upgrade services",
    // "office migration services",

    // // Location-based
    // "office solutions sydney",
    // "office development melbourne",
    // "office consultants brisbane",
    // "office experts perth",

    // // Technology combinations
    // "office azure integration",
    // "office sql development",
    // "office cloud migration",
    // "office 365 solutions",
    // "sharepoint integration",
    // "office automation systems",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Business Solutions & Custom Office Development Services | Office Experts Group",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.officeexperts.com.au/services/by-business-solution",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
