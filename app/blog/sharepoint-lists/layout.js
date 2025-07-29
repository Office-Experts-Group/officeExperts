import React from "react";

export const metadata = {
  // Basic metadata
  title: "Use SharePoint Lists just like a Relational Database in Power Apps",
  description:
    "Learn how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",

  // OpenGraph
  openGraph: {
    title: "Use SharePoint Lists just like a Relational Database in Power Apps",
    description:
      "Learn how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
    url: "https://www.powerplatformexperts.com.au/blog/sharepoint-lists",
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
  keywords: ["sharepoint lists"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Use SharePoint Lists just like a Relational Database in Power Apps",
    description:
      "Learn how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.powerplatformexperts.com.au/blog/sharepoint-lists",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
