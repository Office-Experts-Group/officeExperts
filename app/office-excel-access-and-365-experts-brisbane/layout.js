import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Experts Brisbane | Microsoft Office Consultants Brisbane",
  description:
    "Leading Microsoft Office consultants in Brisbane specializing in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Brisbane | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Brisbane specializing in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
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
    // Location-specific
    "Microsoft Office consultants Brisbane",
    "Excel consultants Brisbane",
    "Access database specialists Brisbane",
    "Word experts Brisbane",
    "PowerPoint designers Brisbane",
    "Office 365 consulting Brisbane",

    // Service-specific
    "custom Excel development Brisbane",
    "Access database solutions Brisbane",
    "Word template design Brisbane",
    "PowerPoint presentation services Brisbane",
    "Office 365 migration Brisbane",

    // Specialty services
    "VBA development Brisbane",
    "database integration Brisbane",
    "document automation Brisbane",
    "Office cloud solutions Brisbane",
    "Microsoft Office training Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Brisbane | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Brisbane specializing in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
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
