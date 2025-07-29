import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Database Experts Sydney",
  description:
    "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Sydney.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Database Experts Sydney",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Sydney.",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Database Experts Sydney",
    description:
      "With over 25 years of experience, we are Australia's leading Microsoft solutions provider in Sydney.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/excel-and-access-experts-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
