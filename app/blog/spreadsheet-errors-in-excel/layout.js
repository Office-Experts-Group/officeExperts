import React from "react";

export const metadata = {
  // Basic metadata
  title: "The Hidden Risk of Spreadsheet Errors in Your Business",
  description:
    "Learn why spreadsheet errors are so common, how to identify warning signs, and practical strategies to prevent costly mistakes.",

  // OpenGraph
  openGraph: {
    title: "The Hidden Risk of Spreadsheet Errors in Your Business",
    description:
      "Learn why spreadsheet errors are so common, how to identify warning signs, and practical strategies to prevent costly mistakes.",
    url: "https://www.excelexperts.com.au/blog/spreadsheet-errors-in-excel",
    siteName: "Excel Experts",
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
  keywords: ["spreadsheet errors"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "The Hidden Risk of Spreadsheet Errors in Your Business",
    description:
      "Learn why spreadsheet errors are so common, how to identify warning signs, and practical strategies to prevent costly mistakes.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/blog/spreadsheet-errors-in-excel",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
