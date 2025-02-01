import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Experts Richmond | Office Experts Group",
  description:
    "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Richmond | Office Experts Group",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
  },

  // Additional metadata
  keywords: [
    // Location specific
    "Microsoft office experts richmond",
    "office 365 consultants richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Richmond",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/office-and-office-365-experts-richmond",
    languages: {
      "en-AU": "/office-and-office-365-experts-richmond",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
