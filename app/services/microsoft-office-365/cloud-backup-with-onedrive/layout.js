import React from "react";

export const metadata = {
  // Basic metadata
  title: "OneDrive Cloud Backup | Office Experts Group",
  description:
    "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",

  keywords: [
    // Core OneDrive services
    "OneDrive cloud storage",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/cloud-backup-with-onedrive",
  },

  // OpenGraph
  openGraph: {
    title: "OneDrive Cloud Backup | Office Experts Group",
    description:
      "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive",
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
    title: "OneDrive Cloud Backup | Office Experts Group",
    description:
      "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
