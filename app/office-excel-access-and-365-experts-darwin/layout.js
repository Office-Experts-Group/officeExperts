import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Experts Darwin | Microsoft Office Consulting Services",
  description:
    "Leading Microsoft Office consulting services in Darwin. Specializing in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Darwin | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specializing in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin/",
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

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Microsoft Office consultants Darwin",
    "Excel consulting Darwin",
    "Access database specialists Darwin",
    "Word document services Darwin",
    "PowerPoint design Darwin",
    "Office 365 migration Darwin",

    // Specific services
    "custom Excel development Darwin",
    "Access database integration Darwin",
    "Word template design Darwin",
    "PowerPoint automation Darwin",
    "Office 365 cloud solutions Darwin",

    // Service combinations
    "Office automation Darwin",
    "database development Darwin",
    "document solutions Darwin",
    "presentation design Darwin",
    "cloud migration Darwin",

    // Industry/Business focus
    "business Office solutions Darwin",
    "corporate Office consulting Darwin",
    "enterprise Office services Darwin",
    "government Office solutions Darwin",
    "Office training Darwin",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Darwin | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specializing in Excel, Access, Word, PowerPoint and Office 365 solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin/",
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
