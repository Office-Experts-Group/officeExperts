import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office and SQL Server Integration | Office Experts Group",
  description:
    "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases.",

  keywords: [
    // Core integration services
    "SQL Server integration",
  ],

  alternates: {
    canonical:
      "/services/by-business-solution/office-and-sql-server-integration",
  },

  // OpenGraph
  openGraph: {
    title: "Office and SQL Server Integration | Office Experts Group",
    description:
      "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration",
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
    title: "Office and SQL Server Integration | Office Experts Group",
    description:
      "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
