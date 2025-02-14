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
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
