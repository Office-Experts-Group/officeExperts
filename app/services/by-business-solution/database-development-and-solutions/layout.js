import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Database Development and Solutions | Office Expert Australia",
  description:
    "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",

  // OpenGraph
  openGraph: {
    title: "Database Development and Solutions | Office Expert Australia",
    description:
      "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",
    url: "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/",
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
    // Core database services
    "Microsoft database development",
    "database solutions Australia",
    "Access database development",
    "SQL Server solutions",
    "Azure database services",

    // Service-specific
    "database migration services",
    "database integration",
    "multi-user database solutions",
    "cloud database development",
    "SharePoint database solutions",

    // Technology combinations
    "Access SQL Server integration",
    "Azure SQL databases",
    "web database development",
    "ASP.NET database solutions",
    "database GUI development",

    // Business solutions
    "business database solutions",
    "enterprise database systems",
    "custom database development",
    "database automation solutions",
    "database consulting services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Database Development and Solutions | Office Expert Australia",
    description:
      "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/",
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
