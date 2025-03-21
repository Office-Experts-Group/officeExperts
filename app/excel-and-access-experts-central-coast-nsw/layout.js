import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel & Access Consultants Central Coast NSW",
  description:
    "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specialising in comprehensive database solutions, Excel automation, and business process optimisation.",

  // OpenGraph
  openGraph: {
    title: "Excel & Access Consultants Central Coast NSW",
    description:
      "Leading Microsoft Excel and Access consulting and solutions provider in Central Coast NSW. Specialising in comprehensive database solutions, Excel automation, and business process optimisation.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
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
  alternates: {
    canonical: "/excel-and-access-experts-central-coast-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
