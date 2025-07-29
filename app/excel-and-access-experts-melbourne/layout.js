import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Melbourne",
  description:
    "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Melbourne.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Melbourne",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Melbourne.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-melbourne",
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

  // Additional metadata
  keywords: [
    // Location-specific
    "Excel experts Melbourne",
    "Access experts Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Experts Melbourne",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Melbourne.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/excel-and-access-experts-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
