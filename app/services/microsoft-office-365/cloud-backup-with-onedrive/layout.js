import React from "react";

export const metadata = {
  // Basic metadata
  title: "OneDrive Cloud Backup | Office Experts Group",
  description:
    "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",

  keywords: [
    // Core OneDrive services
    "OneDrive cloud storage",
    // "OneDrive business backup",
    // "OneDrive implementation",
    // "OneDrive migration services",
    // "OneDrive support Australia",

    // // Device-specific
    // "OneDrive iPhone backup",
    // "OneDrive Android sync",
    // "OneDrive Windows backup",
    // "OneDrive Mac integration",
    // "OneDrive tablet sync",

    // // Service-specific long tail
    // "OneDrive business file sharing",
    // "OneDrive data protection",
    // "OneDrive file sync solutions",
    // "OneDrive storage management",
    // "OneDrive backup automation",

    // // Business-focused
    // "corporate cloud storage",
    // "business file backup",
    // "enterprise cloud solutions",
    // "secure file sharing",

    // // Integration keywords
    // "Office 365 cloud backup",
    // "SharePoint OneDrive integration",
    // "Microsoft cloud storage",
    // "cross-platform cloud backup",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-office-365/cloud-backup-with-onedrive",
    languages: {
      "en-AU": "/services/microsoft-office-365/cloud-backup-with-onedrive",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
