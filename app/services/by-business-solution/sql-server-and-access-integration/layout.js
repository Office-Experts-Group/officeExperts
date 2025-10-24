import React from "react";

export const metadata = {
  // Basic metadata
  title: "SQL Server and Microsoft Access Integration | Office Experts Group",
  description:
    "Upgrade your Access database with an SQL Server backend. Improve security, performance, scalability and reliability while keeping your existing forms and reports. Expert SQL Server migration services across Australia.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "SQL Server and Access Integration Benefits | Office Experts",
    description:
      "Transform your Access database with an SQL Server backend. Handle more users, improve security, eliminate corruption and scale effortlessly. Professional migration services.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["SQL Server Access integration"],

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "SQL Server and Microsoft Access Integration",
    description:
      "Professional SQL Server migration for Access databases. Improve performance, security and reliability across Australia.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
  },

  // Additional tags
  authors: [{ name: "Office Experts Group" }],
  category: "Database Services",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
