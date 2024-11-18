import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Office and Office 365 Experts Sydney | Microsoft Office Consultants Sydney",
  description:
    "Leading Microsoft Office and Office 365 consultants in Sydney. Specializing in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Sydney | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office and Office 365 consultants in Sydney. Specializing in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-sydney/",
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
    "Office consultants Sydney",
    "Office 365 experts Sydney",
    "Microsoft Office specialists Sydney",

    // Service-specific
    "Sydney Office 365 consulting",
    "Sydney Office migration services",
    "Office cloud solutions Sydney",
    "Office automation Sydney",

    // Product-specific
    "Excel consulting Sydney",
    "Access database Sydney",
    "Word template services Sydney",
    "PowerPoint design Sydney",

    // Solution-specific
    "Office integration Sydney",
    "Office cloud migration Sydney",
    "Office 365 implementation Sydney",
    "Office automation solutions Sydney",

    // Industry-specific
    "business Office solutions Sydney",
    "corporate Office consulting Sydney",
    "enterprise Office services Sydney",

    // Technology combinations
    "Office SharePoint Sydney",
    "Office Azure solutions Sydney",
    "Office cloud services Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Sydney | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office and Office 365 consultants in Sydney. Specializing in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-and-office-365-experts-sydney/",
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
