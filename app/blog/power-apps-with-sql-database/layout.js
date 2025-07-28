import React from "react";

export const metadata = {
  // Basic metadata
  title: "Getting Started with Power Apps and Microsoft SQL Database",
  description:
    "Learn how to evolve your Power Apps development by connecting to Microsoft SQL databases. This comprehensive guide covers setting up an Azure SQL database, creating tables and relationships, connecting Power Apps to SQL using stored procedures and Power Automate, and building a simple inventory management application.",

  // OpenGraph
  openGraph: {
    title: "Getting Started with Power Apps and Microsoft SQL Database",
    description:
      "Learn how to evolve your Power Apps development by connecting to Microsoft SQL databases. This comprehensive guide covers setting up an Azure SQL database, creating tables and relationships, connecting Power Apps to SQL using stored procedures and Power Automate, and building a simple inventory management application.",
    url: "https://www.officeexperts.com.au/blog/power-apps-sql-database",
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
      "Learn how to evolve your Power Apps development by connecting to Microsoft SQL databases. This comprehensive guide covers setting up an Azure SQL database, creating tables and relationships, connecting Power Apps to SQL using stored procedures and Power Automate, and building a simple inventory management application.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-apps-with-sql-database",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/blog/power-apps-with-sql-database",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
