import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Help & Support | Office Experts Group",
  description:
    "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",

  keywords: [
    // Core Excel support keywords
    "Excel one on one training",
    "Excel expert support",
  ],

  alternates: {
    canonical: "/services/microsoft-excel/excel-support",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/excel-support",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Help & Support | Office Experts Group",
    description:
      "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",
    url: "https://www.excelexperts.com.au/excel-support",
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
    title: "Microsoft Excel Help & Support | Office Experts Group",
    description:
      "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
