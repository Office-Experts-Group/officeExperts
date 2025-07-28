import React from "react";

export const metadata = {
  // Basic metadata
  title: "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)",
  description:
    "Learn how to create your own Excel shortcuts using macros. 10 practical custom shortcuts that will supercharge your productivity and save you hours of work.",

  // OpenGraph
  openGraph: {
    title: "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)",
    description:
      "Learn how to create your own Excel shortcuts using macros. 10 practical custom shortcuts that will supercharge your productivity and save you hours of work.",
    url: "https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros",
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
  keywords: ["Excel custom shortcuts"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)",
    description:
      "Learn how to create your own Excel shortcuts using macros. 10 practical custom shortcuts that will supercharge your productivity and save you hours of work.",
    images: ["/logo.png"],
  },

  alternates: {
    alternate: [
      {
        url: "https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros",
      },
    ],
    canonical: "/blog/custom-excel-shortcuts-with-macros",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
