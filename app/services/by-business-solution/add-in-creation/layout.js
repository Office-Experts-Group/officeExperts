import React from "react";

export const metadata = {
  // Basic metadata
  title: "Add-in Creation | Office Experts Group",
  description:
    "Add-ins extend the functionality of Office products and can make new functionality available to all of your staff, documents. Call 1300102810",

  // Additional metadata
  keywords: [
    // Core Add-in services
    "Microsoft Office add-in developers",
  ],

  alternates: {
    canonical: "/services/by-business-solution/add-in-creation",
  },

  // OpenGraph
  openGraph: {
    title: "Add-in Creation | Office Experts Group",
    description:
      "Add-ins extend the functionality of Office products and can make new functionality available to all of your staff, documents. Call 1300102810",
    url: "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation",
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
    title: "Add-in Creation | Office Experts Group",
    description:
      "Add-ins extend the functionality of Office products and can make new functionality available to all of your staff, documents. Call 1300102810",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
