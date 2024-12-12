import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "OneDrive Cloud Backup | OneDrive for Business | Office 365",
  description:
    "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",

  keywords: [
    // Core OneDrive services
    "OneDrive business backup",
    "OneDrive cloud storage",
    "OneDrive implementation",
    "OneDrive migration services",
    "OneDrive support Australia",

    // Device-specific
    "OneDrive iPhone backup",
    "OneDrive Android sync",
    "OneDrive Windows backup",
    "OneDrive Mac integration",
    "OneDrive tablet sync",

    // Service-specific long tail
    "OneDrive business file sharing",
    "OneDrive data protection",
    "OneDrive file sync solutions",
    "OneDrive storage management",
    "OneDrive backup automation",

    // Business-focused
    "corporate cloud storage",
    "business file backup",
    "enterprise cloud solutions",
    "secure file sharing",

    // Integration keywords
    "Office 365 cloud backup",
    "SharePoint OneDrive integration",
    "Microsoft cloud storage",
    "cross-platform cloud backup",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
