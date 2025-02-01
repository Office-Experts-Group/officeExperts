import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Database Experts Sydney | Office Experts Group",
  description:
    "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Database Experts Sydney | Office Experts Group",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-sydney",
  },

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Excel consulting Sydney",
    "Access specialists Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/excel-and-access-experts-sydney",
    languages: {
      "en-AU": "/excel-and-access-experts-sydney",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
