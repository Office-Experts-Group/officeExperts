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
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-wollongong",
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
    // Location based
    "microsoft office consultants wollongong",
    "excel consulting wollongong",
    "access database specialists wollongong",
    "office 365 consulting wollongong",
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

  alternates: {
    canonical: "/office-excel-access-and-365-experts-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
