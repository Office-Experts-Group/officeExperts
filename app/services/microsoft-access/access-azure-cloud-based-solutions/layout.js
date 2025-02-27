import React from "react";

export const metadata = {
  // Basic metadata
  title: "Azure Cloud Access Solution | Office Experts Group",
  description:
    "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",

  // Additional metadata
  keywords: [
    // Core Azure/Access services
    "Azure cloud database solutions",
  ],

  alternates: {
    canonical: "/services/microsoft-access/access-azure-cloud-based-solutions",
    alternate: [
      {
        url: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Azure Cloud Access Solution | Office Experts Group",
    description:
      "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",
    url: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
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
    title: "Azure Cloud Access Solution | Office Experts Group",
    description:
      "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
