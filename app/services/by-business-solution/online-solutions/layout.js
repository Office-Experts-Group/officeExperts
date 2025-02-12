import React from "react";

export const metadata = {
  // Basic metadata
  title: "Online Solution | Office Experts Group",
  description:
    "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 102 810",

  keywords: [
    // Core online services
    "custom online spreadsheet solutions",
    // "online database connectivity",
    // "web application development",
    // "cloud data solutions",
    // "online data management",

    // // Location-based
    // "online solutions Sydney",
    // "web services Melbourne",
    // "cloud solutions Brisbane",
    // "online database Perth",

    // // Service-specific long tail
    // "SharePoint online integration",
    // "Office 365 web services",
    // "ASP.NET web applications",
    // "Azure cloud solutions",
    // "Google Docs integration",

    // // Industry-specific
    // "business online solutions",
    // "enterprise web services",
    // "corporate cloud solutions",
    // "remote data access",

    // // Technology combinations
    // "Excel online connectivity",
    // "Word web integration",
    // "Access online database",
    // "PowerPoint web sharing",
    // "Outlook online solutions",
  ],
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
