import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Experts Wollongong",
  description:
    "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Wollongong",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
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
    // Location based
    "microsoft office consultants wollongong",
    "excel consulting wollongong",
    "access database specialists wollongong",
    "word experts wollongong",
    "office 365 consulting wollongong",
    "powerpoint designers wollongong",

    // Service specific
    "custom office development wollongong",
    "excel programming wollongong",
    "access database development wollongong",
    "word template design wollongong",
    "office automation wollongong",
    "powerpoint presentation design wollongong",

    // Solution specific
    "business database solutions wollongong",
    "excel reporting solutions wollongong",
    "document automation wollongong",
    "office integration wollongong",
    "data analysis wollongong",
    "cloud solutions wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Wollongong",
    description:
      "Our Microsoft Office consultants at Office Experts Group Wollongong specialise in custom development across the entire suite of Office products. Expert in databases, custom coding, document design, dashboards and reporting solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
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
