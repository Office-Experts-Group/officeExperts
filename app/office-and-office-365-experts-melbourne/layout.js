import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Consultants Melbourne | Office Experts Group",
  description:
    "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialise in custom Office development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Consultants Melbourne | Office Experts Group",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialise in custom Office development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne",
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
    "Microsoft Office consultants Melbourne",
    "Office 365 consulting Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Melbourne | Office Experts Group",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialise in custom Office development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/office-and-office-365-experts-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
