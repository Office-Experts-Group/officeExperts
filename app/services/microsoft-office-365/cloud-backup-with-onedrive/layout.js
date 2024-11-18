import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "OneDrive Cloud Backup | OneDrive for Business | Office 365",
  description:
    "Expert OneDrive cloud storage and backup solutions for businesses. Comprehensive OneDrive implementation, migration, and support services across Australia.",

  // OpenGraph
  openGraph: {
    title: "OneDrive Cloud Backup Solutions",
    description:
      "Professional OneDrive cloud storage and backup solutions for businesses. Expert implementation and support across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive/",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "OneDrive Cloud Backup Solutions",
    description:
      "Professional OneDrive cloud storage and backup solutions for businesses. Expert implementation and support across Australia.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
