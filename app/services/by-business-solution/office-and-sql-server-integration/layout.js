import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and SQL Server Integration",
  description:
    "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases. Contact us for integration solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and SQL Server Integration",
    description:
      "Custom SQL Server integration solutions for Microsoft Office applications including Access, Excel, Word and Visual Studio. Expert database integration services.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
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
    // Core integration services
    "SQL Server integration",
    "Office SQL integration",
    "database integration Australia",
    "SQL Server consultants",
    "database integration services",

    // Application specific
    "Excel SQL integration",
    "Access SQL integration",
    "Word SQL integration",
    "Visual Studio SQL integration",
    "Office database connectivity",

    // Solution specific
    "automated data extraction",
    "SQL reporting solutions",
    "database interface development",
    "SQL Server automation",
    "custom SQL integration",

    // Technical terms
    "SQL data extraction",
    "database connectivity",
    "automated SQL reporting",
    "SQL Server development",
    "database interface design",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and SQL Server Integration Services",
    description:
      "Custom SQL Server integration solutions for Microsoft Office applications including Access, Excel, Word and Visual Studio. Expert database integration services.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
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
