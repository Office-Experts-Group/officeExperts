import React from "react";

export const metadata = {
  url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation",
  title: "Microsoft Office 365 Implementation | Office Experts Group",
  description:
    "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans that target individuals, businesses, and business-like entities of all sizes. With the tremendous value and sheer amount of choice, it can be overwhelming to choose the right plan for you. Our experts are ready to consult with you.",
  keywords: [
    // Core Office 365 services
    "Office 365 implementation",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/office-365-implementation",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Office 365 Implementation | Office Experts Group",
    description:
      "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans that target individuals, businesses, and business-like entities of all sizes. With the tremendous value and sheer amount of choice, it can be overwhelming to choose the right plan for you. Our experts are ready to consult with you.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation",
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
    title: "Microsoft Office 365 Implementation | Office Experts Group",
    description:
      "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans that target individuals, businesses, and business-like entities of all sizes. With the tremendous value and sheer amount of choice, it can be overwhelming to choose the right plan for you. Our experts are ready to consult with you.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
