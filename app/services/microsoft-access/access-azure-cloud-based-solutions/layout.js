import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Azure Cloud Access Solution",
  description:
    "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",

  // OpenGraph
  openGraph: {
    title: "Azure Cloud Access Solution",
    description:
      "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions/",
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
    // Core Azure/Access services
    "Azure cloud database",
    "Access cloud solutions",
    "Azure database hosting",
    "cloud based Access",
    "Azure SQL database",

    // Features and capabilities
    "remote database access",
    "cloud data storage",
    "Access Azure integration",
    "database migration Azure",
    "cloud database conversion",

    // Service-specific
    "Azure database development",
    "Access cloud migration",
    "Azure hosting services",
    "cloud database solutions",
    "Azure SQL deployment",

    // Industry/business focus
    "business cloud solutions",
    "enterprise database hosting",
    "Azure corporate solutions",
    "cloud database management",
    "Access business solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Azure Cloud Access Solution",
    description:
      "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions/",
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
