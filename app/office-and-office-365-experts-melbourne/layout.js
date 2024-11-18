import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Experts Melbourne",
  description:
    "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialize in custom Office development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Melbourne",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialize in custom Office development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/",
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
    "Microsoft Office consultants Melbourne",
    "Office 365 consulting Melbourne",
    "Office automation Melbourne",
    "Microsoft 365 experts Melbourne",

    // Service-specific
    "custom Office development Melbourne",
    "Office integration services Melbourne",
    "Office 365 migration Melbourne",
    "Office cloud solutions Melbourne",

    // Expertise areas
    "Office database development Melbourne",
    "Office document automation Melbourne",
    "Office workflow solutions Melbourne",
    "Office template design Melbourne",

    // Industry/solution focused
    "business Office solutions Melbourne",
    "enterprise Office consulting Melbourne",
    "corporate Office automation Melbourne",
    "Office productivity solutions Melbourne",

    // Technology combinations
    "Office SharePoint integration Melbourne",
    "Office Azure solutions Melbourne",
    "Office cloud migration Melbourne",
    "Office 365 implementation Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Melbourne",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialize in custom Office development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/",
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
