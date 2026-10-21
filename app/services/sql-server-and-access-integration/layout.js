// app/services/sql-server-and-access-integration/layout.js

import React from "react";

// Merged metadata for the combined page. Covers both former topics:
// Access to SQL Server migration, and Office (Excel, Word, PowerPoint) to SQL Server.
const title = "SQL Server Integration for Access and Office | Office Experts";
const description =
  "Upgrade Access to a SQL Server backend, or connect Excel, Word, PowerPoint and Visual Studio to your SQL Server data. Australia-wide experts since 2000.";

export const metadata = {
  // Basic metadata
  title,
  description,

  keywords: ["SQL Server Access integration"],

  // OpenGraph metadata for social sharing
  openGraph: {
    title,
    description,
    url: "https://www.officeexperts.com.au/services/sql-server-and-access-integration",
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

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title,
    description,
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/services/sql-server-and-access-integration",
  },

  // Additional tags
  authors: [{ name: "Office Experts Group" }],
  category: "Database Services",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
