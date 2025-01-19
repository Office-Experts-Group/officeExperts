import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Help & Support | Office Experts Group",
  description:
    "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",

  keywords: [
    // Core Excel support keywords
    "Excel one on one training",
    "Excel expert support",
    // "Excel consultant services",
    // "Excel help Australia",
    // "remote Excel training",

    // // Service-specific
    // "Excel troubleshooting help",
    // "Excel code review services",
    // "Excel migration support",
    // "Excel data conversion help",
    // "Excel solution documentation",

    // // Training-focused
    // "custom Excel training",
    // "group Excel training",
    // "individual Excel sessions",
    // "Excel how-to videos",
    // "onsite Excel training",

    // // Location-based
    // "Excel consultants Sydney",
    // "Excel training Melbourne",
    // "Excel support Brisbane",
    // "Excel help Perth",

    // // Business-focused
    // "corporate Excel training",
    // "business Excel support",
    // "enterprise Excel solutions",
    // "professional Excel guidance",
    // "Excel business consulting",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-excel/excel-support",
    languages: {
      "en-AU": "/services/microsoft-excel/excel-support",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
