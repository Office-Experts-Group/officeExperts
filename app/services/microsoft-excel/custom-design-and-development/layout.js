import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Custom Design and Development | Excel Development Services",
  description:
    "Professional Excel custom design and development services across Australia. Specializing in custom workbooks, VBA development, and Excel integration solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel Custom Design and Development Services",
    description:
      "Professional Excel custom design and development services across Australia. Specializing in custom workbooks, VBA development, and Excel integration solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
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
    // Core service keywords
    "Excel custom development",
    "Excel design services",
    "Excel VBA development",
    "Excel programming services",
    "Excel integration solutions",

    // Feature-specific
    "custom Excel workbooks",
    "Excel template development",
    "Excel data manipulation",
    "Excel reporting solutions",
    "Excel macro development",

    // Integration-focused
    "Excel third party integration",
    "Excel SQL integration",
    "Excel Azure integration",
    "Excel Office integration",
    "Excel database connection",

    // Business solutions
    "Excel business automation",
    "Excel process automation",
    "Excel workflow solutions",
    "Excel business solutions",
    "Excel efficiency tools",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Custom Design and Development Services",
    description:
      "Professional Excel custom design and development services across Australia. Specializing in custom workbooks, VBA development, and Excel integration solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
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
