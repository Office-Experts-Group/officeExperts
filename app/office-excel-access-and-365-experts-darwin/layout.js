import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consulting Services | Office Experts Group",
  description:
    "Leading Microsoft Office consulting services in Darwin. Specialising in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consulting Services | Office Experts Group",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specialising in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin",
  },

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Microsoft Office consultants Darwin",
    "Excel consulting Darwin",
    "Access database specialists Darwin",
    "Office 365 services Darwin",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Darwin | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specialising in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
