import React from "react";

export const metadata = {
  // Basic metadata
  title: "Getting Started with Power Apps and Microsoft SQL Database",
  description:
    "Learn how to set up an Azure SQL database, create tables and relationships, connect Power Apps and build a simple inventory management application.",

  // OpenGraph
  openGraph: {
    title: "Getting Started with Power Apps and Microsoft SQL Database",
    description:
      "Learn how to set up an Azure SQL database, create tables and relationships, connect Power Apps and build a simple inventory management application.",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-with-sql-database",
    siteName: "Office Experts",
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
  keywords: ["Power Apps SQL Database"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Getting Started with Power Apps and Microsoft SQL Database",
    description:
      "Learn how to set up an Azure SQL database, create tables and relationships, connect Power Apps and build a simple inventory management application.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.powerplatformexperts.com.au/blog/power-apps-with-sql-database",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
