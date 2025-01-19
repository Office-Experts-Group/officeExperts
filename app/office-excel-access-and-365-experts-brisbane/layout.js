import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consultants Brisbane | Office Experts Group",
  description:
    "Leading Microsoft Office consultants in Brisbane specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consultants Brisbane | Office Experts Group",
    description:
      "Leading Microsoft Office consultants in Brisbane specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Microsoft Office consultants Brisbane",
    "Excel consultants Brisbane",
    "Access database specialists Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Brisbane | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Brisbane Specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/office-excel-access-and-365-experts-brisbane",
    languages: {
      "en-AU": "/office-excel-access-and-365-experts-brisbane",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
