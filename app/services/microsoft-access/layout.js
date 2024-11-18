import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Database Solutions Australia",
  description:
    "Professional Microsoft Access database consulting and development services across Australia. Specializing in custom database solutions, cloud integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Services",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specializing in custom database solutions, cloud integration, and business automation.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/",
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
    "Microsoft Access consulting",
    "Access database development",
    "database solutions Australia",
    "Access database migration",
    "custom database development",

    // Specific solutions
    "Access cloud solutions",
    "Azure database integration",
    "Access database upgrade",
    "database conversion services",
    "Access online solutions",

    // Service-specific long tail
    "Access data management solutions",
    "Access multi-user databases",
    "Access reporting solutions",
    "database structuring services",
    "Access query optimization",

    // Integration focused
    "Access SQL integration",
    "SharePoint database integration",
    "third party database integration",
    "Access Azure migration",
    "database cloud solutions",

    // Support and maintenance
    "Access database support",
    "database maintenance services",
    "Access troubleshooting",
    "database repair services",
    "Access database training",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Services",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specializing in custom database solutions, cloud integration, and business automation.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-access/",
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
