import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office 365 Migration | Office 365 Upgrades | Office 365 Help",
  description:
    "Professional Office 365 migration services with no downtime or data loss. Expert migration of emails, files, and systems to Office 365.",

  // OpenGraph
  openGraph: {
    title: "Office 365 Migration Services",
    description:
      "Seamless Office 365 migration services for emails, files and systems with zero downtime and data loss protection.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-migration/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Keywords extrapolated from content
  keywords: [
    // Core migration services
    "Office 365 migration services",
    "email migration Office 365",
    "Office 365 data migration",
    "Office 365 upgrade services",
    "Office 365 transition",

    // Location-based
    "Office 365 migration Sydney",
    "Office 365 migration Melbourne",
    "Office 365 migration Brisbane",
    "Office 365 migration Perth",

    // Service-specific long tail
    "Exchange to Office 365 migration",
    "Gmail to Office 365 migration",
    "OneDrive migration services",
    "Office 365 email transfer",
    "business Office 365 migration",

    // Technical specifics
    "zero downtime migration",
    "data loss prevention migration",
    "secure Office 365 migration",
    "Exchange migration specialist",

    // Migration combinations
    "email and file migration",
    "complete Office 365 transition",
    "business email migration",
    "corporate Office 365 setup",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office 365 Migration Services",
    description:
      "Seamless Office 365 migration services for emails, files and systems with zero downtime and data loss protection.",
    images: [
      "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-migration/",
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
