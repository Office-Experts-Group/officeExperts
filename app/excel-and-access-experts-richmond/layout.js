import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Richmond | Office Experts Group",
  description:
    "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specialising in custom development, databases, integration, data manipulation and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Richmond | Office Experts Group",
    description:
      "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specialising in custom development, databases, integration, data manipulation and business solutions.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-richmond",
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
      "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specialising in custom development, databases, integration, data manipulation and business solutions.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/excel-and-access-experts-richmond",
    languages: {
      "en-AU": "/excel-and-access-experts-richmond",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
