import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Cloud Based Solutions",
  description:
    "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions. Contact us for Azure cloud expertise.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Cloud Based Solutions",
    description:
      "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions. Contact us for Azure cloud expertise.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure/",
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
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core Azure services
    "Azure cloud solutions Australia",
    "Azure database development",
    "Azure SQL Server integration",
    "Azure mobile solutions",
    "Azure web development",

    // SharePoint integration
    "SharePoint cloud integration",
    "SharePoint Office 365 migration",
    "SharePoint business automation",

    // Solution types
    "cloud database solutions",
    "cloud migration services",
    "cloud based business solutions",
    "Azure hosting solutions",

    // Location-based
    "Azure consultants Sydney",
    "Azure solutions Melbourne",
    "cloud experts Brisbane",
    "Azure specialists Perth",

    // Service-specific
    "Azure SQL development",
    "Azure mobile apps",
    "Azure web applications",
    "cloud database design",
    "Azure integration services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Cloud Based Solutions",
    description:
      "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions. Contact us for Azure cloud expertise.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure/",
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
