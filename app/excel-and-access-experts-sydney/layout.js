import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Excel and Access Database Experts Sydney | Database Development | Excel Development",
  description:
    "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-sydney/",
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

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Excel consulting Sydney",
    "Access database Sydney",
    "Excel development Sydney",
    "Access solutions Sydney",
    "Excel programmers Sydney",
    "Access specialists Sydney",

    // Specific services
    "Excel VBA development",
    "Access database design",
    "Excel automation Sydney",
    "Access integration services",
    "Excel data solutions",
    "Access reporting systems",

    // Solution types
    "custom Excel solutions",
    "Access database development",
    "Excel business automation",
    "Access data management",
    "Excel reporting tools",
    "Access business solutions",

    // Industry terms
    "database consultants Sydney",
    "Excel experts Sydney",
    "Microsoft Access Sydney",
    "Excel integration Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Database Experts Sydney",
    description:
      "Leading Microsoft Excel and Access consultants in Sydney. Excel development, Access database solutions, macros, VBA programming, custom solutions and integration.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/excel-and-access-experts-sydney/",
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
