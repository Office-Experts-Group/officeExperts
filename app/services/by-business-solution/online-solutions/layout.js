import React from "react";

export const metadata = {
  // Basic metadata
  title: "Online Solution | Office Experts Group",
  description:
    "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 102 810",

  keywords: [
    // Core online services
    "custom online spreadsheet solutions",
  ],

  alternates: {
    canonical: "/services/by-business-solution/online-solutions",
  },

  // OpenGraph
  openGraph: {
    title: "Online Solution | Office Experts Group",
    description:
      "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 102 810",
    url: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
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
    title: "Online Solution | Office Experts Group",
    description:
      "We are Online Solution Experts! Do you need your spreadsheets online? Do you need them connected to a database? Call us 1300 102 810",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
