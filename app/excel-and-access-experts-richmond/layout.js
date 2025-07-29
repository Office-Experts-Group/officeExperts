import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Richmond",
  description:
    "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Richmond.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Richmond",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Richmond.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-richmond",
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
    // Location-specific
    "excel consultants richmond",
    "access database experts richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Experts Richmond",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Richmond.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/excel-and-access-experts-richmond",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
