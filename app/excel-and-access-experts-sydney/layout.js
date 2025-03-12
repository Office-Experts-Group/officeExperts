import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Database Experts Sydney",
  description:
    "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-sydney",
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
  alternates: {
    canonical: "/excel-and-access-experts-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
