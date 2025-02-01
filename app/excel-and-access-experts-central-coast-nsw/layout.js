import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel & Access Experts Central Coast NSW | Office Experts Group",
  description:
    "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specialising in comprehensive database solutions, Excel automation, and business process optimization.",

  // OpenGraph
  openGraph: {
    title: "Excel & Access Experts Central Coast NSW | Office Experts Group",
    description:
      "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specialising in comprehensive database solutions, Excel automation, and business process optimization.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Excel consultants Central Coast NSW",
    "Access database specialists Central Coast NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Excel & Access Experts Group | Microsoft Excel & Access Consulting Central Coast NSW",
    description:
      "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specialising in comprehensive database solutions, Excel automation, and business process optimization.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/excel-and-access-experts-central-coast-nsw",
    languages: {
      "en-AU": "/excel-and-access-experts-central-coast-nsw",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
