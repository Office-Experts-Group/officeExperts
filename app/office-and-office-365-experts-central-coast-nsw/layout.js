import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Consultants Central Coast, NSW",
  description:
    "Leading Microsoft Office consultants on the Central Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Consultants Central Coast, NSW",
    description:
      "Leading Microsoft Office consultants on the Central Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
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
    // Location-based
    "Microsoft Office consultants Central Coast, NSW",
    "Office 365 consulting Central Coast, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Central Coast, NSW",
    description:
      "Leading Microsoft Office consultants on the Central Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/office-and-office-365-experts-central-coast-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
