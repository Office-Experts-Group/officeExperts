import React from "react";

export const metadata = {
  title:
    "Microsoft Office Consulting Northern Rivers NSW | Office Experts Group",
  description:
    "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specialising in comprehensive Office solutions, integration, and business automation.",

  openGraph: {
    title:
      "Microsoft Office Consulting Northern Rivers NSW | Office Experts Group",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specialising in comprehensive Office solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw",
  },

  keywords: [
    // Location-specific
    "Microsoft Office consulting Northern Rivers NSW",
    "Office solutions Northern Rivers NSW",
    "Microsoft Office programmers Northern Rivers NSW",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Office Experts Group Northern Rivers NSW | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW. Specialising in comprehensive Office solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/office-excel-access-and-365-experts-northern-rivers-nsw",
    languages: {
      "en-AU": "/office-excel-access-and-365-experts-northern-rivers-nsw",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
