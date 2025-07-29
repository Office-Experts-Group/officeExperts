import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consultants Gold Coast",
  description:
    "Leading Microsoft Office consultants on the Gold Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consultants Gold Coast",
    description:
      "Leading Microsoft Office consultants on the Gold Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-gold-coast",
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
    "Microsoft Office consultants Gold Coast",
    "Office 365 consulting Gold Coast",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Consultants Gold Coast",
    description:
      "Leading Microsoft Office consultants on the Gold Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/office-and-office-365-experts-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
