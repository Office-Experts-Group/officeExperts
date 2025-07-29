import React from "react";

export const metadata = {
  // Basic metadata
  title: "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow",
  description:
    "Master 20 advanced Excel shortcuts that will transform your productivity. These keyboard shortcuts will save you hours and impress your team.",

  // OpenGraph
  openGraph: {
    title: "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow",
    description:
      "Master 20 advanced Excel shortcuts that will transform your productivity. These keyboard shortcuts will save you hours and impress your team.",
    url: "https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts",
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
  keywords: ["Excel shortcuts"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow",
    description:
      "Master 20 advanced Excel shortcuts that will transform your productivity. These keyboard shortcuts will save you hours and impress your team.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
