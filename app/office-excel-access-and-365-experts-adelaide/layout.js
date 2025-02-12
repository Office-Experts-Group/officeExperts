import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consultants Adelaide | Office Experts Group",
  description:
    "Leading Microsoft Office consultants in Adelaide specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consultants Adelaide | Office Experts Group",
    description:
      "Leading Microsoft Office consultants in Adelaide specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-adelaide",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Microsoft Office consultants Adelaide",
    "Excel consultants Adelaide",
    "Access database specialists Adelaide",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Adelaide | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Adelaide Specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-adelaide",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
