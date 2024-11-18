import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Why To Choose Access for your Company | Office Expert Australia",
  description:
    "Expert guidance on whether Microsoft Access is the right solution for your business needs. Get professional advice on database solutions, data management, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Is Access Right for your Company? | Access Database Solutions",
    description:
      "Professional guidance on choosing Microsoft Access for your business needs. Expert advice on database solutions, data management, and automation technology selection.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company/",
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
    // Core Access services
    "Microsoft Access solutions",
    "Access database consulting",
    "Access database development",
    "database management solutions",
    "business database systems",

    // Technology specific
    "Microsoft Access expertise",
    "Access database advice",
    "database technology selection",
    "SQL Server integration",
    "cloud database solutions",

    // Business focused
    "business database solutions",
    "corporate database systems",
    "enterprise data management",
    "business process automation",
    "data management strategy",

    // Solution specific
    "custom database development",
    "database integration services",
    "multi-user databases",
    "database reporting solutions",
    "database migration services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Is Access Right for your Company? | Access Database Solutions",
    description:
      "Professional guidance on choosing Microsoft Access for your business needs. Expert advice on database solutions, data management, and automation technology selection.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company/",
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
