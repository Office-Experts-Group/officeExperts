// app/services/database-development-and-solutions/layout.js
import React from "react";

const TITLE = "Database Development | Access, SQL Server & Web Databases";
const DESCRIPTION =
  "Custom database development since 2000. We build, upgrade and migrate Access, SQL Server, Azure and web databases, and connect AI to your business data.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // Additional metadata
  keywords: [
    "database development",
    "Access database developers",
    "Access database upgrade and migration",
    "SQL Server database development",
    "Azure SQL database",
    "web database development",
    "connect AI to SQL database",
    "AI knowledge base for business",
  ],

  alternates: {
    canonical: "/services/database-development-and-solutions",
  },

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/services/database-development-and-solutions",
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
