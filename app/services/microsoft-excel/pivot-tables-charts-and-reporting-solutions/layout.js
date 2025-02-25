import React from "react";

export const metadata = {
  title: "Pivot Tables | Charts and Reporting Solutions | Office Experts Group",
  description:
    "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customised reporting solutions.",

  keywords: [
    // Core pivot table services
    "Excel pivot tables",
    "Excel Charts and Reporting Solutions",
  ],

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
  },

  // OpenGraph
  openGraph: {
    title:
      "Pivot Tables | Charts and Reporting Solutions | Office Experts Group",
    description:
      "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customised reporting solutions.",
    url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Pivot Tables | Charts and Reporting Solutions | Office Experts Group",
    description:
      "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customised reporting solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
