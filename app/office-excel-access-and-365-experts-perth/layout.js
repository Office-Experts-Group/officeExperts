import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Office, Excel, Access and 365 Experts - Perth",
  description:
    "Leading Microsoft Office consulting and solutions provider in Perth. Specializing in Excel, Access, and Office 365 solutions, integration, and business automation.",

  openGraph: {
    title: "Office, Excel, Access and 365 Experts - Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specializing in Excel, Access, and Office 365 solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
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

  keywords: [
    // Perth-specific
    "Microsoft Office consultants Perth",
    "Excel consultants Perth",
    "Access database specialists Perth",
    "Office 365 migration Perth",
    "Office automation Perth",

    // Service-specific
    "custom Excel development",
    "Access database solutions",
    "Office 365 consulting",
    "VBA development Perth",
    "Office integration services",
    "database programming Perth",

    // Business solutions
    "business automation Perth",
    "data analysis Perth",
    "reporting solutions Perth",
    "cloud migration Perth",
    "Office training Perth",

    // Industry-specific
    "corporate Office solutions Perth",
    "government Office services Perth",
    "enterprise Office consulting Perth",

    // Combinations
    "Microsoft Excel programming Perth",
    "Access database development Perth",
    "Office 365 cloud solutions Perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office, Excel, Access and 365 Experts - Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specializing in Excel, Access, and Office 365 solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
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
