import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consultants Wollongong | Office Experts Group",
  description:
    "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consultants Wollongong | Office Experts Group",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
  },

  // Additional metadata
  keywords: [
    // Location based
    "microsoft office consultants wollongong",
    "excel consulting wollongong",
    "access database specialists wollongong",
    "word experts wollongong",
    "office 365 consulting wollongong",
    "powerpoint designers wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Wollongong",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/office-excel-access-and-365-experts-wollongong",
    languages: {
      "en-AU": "/office-excel-access-and-365-experts-wollongong",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
