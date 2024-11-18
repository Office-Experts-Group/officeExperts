import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel One on One Training | Microsoft Excel Help & Support",
  description:
    "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",

  // OpenGraph
  openGraph: {
    title: "Excel Training & Support Services",
    description:
      "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/excel-support/",
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
    // Core Excel support keywords
    "Excel one on one training",
    "Excel expert support",
    "Excel consultant services",
    "Excel help Australia",
    "remote Excel training",

    // Service-specific
    "Excel troubleshooting help",
    "Excel code review services",
    "Excel migration support",
    "Excel data conversion help",
    "Excel solution documentation",

    // Training-focused
    "custom Excel training",
    "group Excel training",
    "individual Excel sessions",
    "Excel how-to videos",
    "onsite Excel training",

    // Location-based
    "Excel consultants Sydney",
    "Excel training Melbourne",
    "Excel support Brisbane",
    "Excel help Perth",

    // Business-focused
    "corporate Excel training",
    "business Excel support",
    "enterprise Excel solutions",
    "professional Excel guidance",
    "Excel business consulting",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Training & Support Services",
    description:
      "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/excel-support/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
