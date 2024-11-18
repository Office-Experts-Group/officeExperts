import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Access Upgrades and Migration",
  description:
    "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",

  openGraph: {
    title: "Access Upgrades and Migration",
    description:
      "Expert Microsoft Access database upgrade and migration services for smooth transitions and risk mitigation.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/upgrades-and-migration/",
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
    // Core services
    "access database migration",
    "access database upgrade",
    "access migration services",
    "access upgrade services",
    "database migration expert",

    // Specific solutions
    "access compatibility issues",
    "access database conversion",
    "access version upgrade",
    "database performance optimization",
    "sql server migration",

    // Technical terms
    "access azure migration",
    "access cloud migration",
    "access database consulting",
    "database troubleshooting",
    "database corruption fix",

    // Business benefits
    "database efficiency improvement",
    "database modernization",
    "database performance tuning",
    "database reliability enhancement",
    "database speed optimization",

    // Location specific
    "access database experts australia",
    "access migration sydney",
    "access upgrade melbourne",
    "database consultants brisbane",
    "database migration perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Access Upgrades and Migration",
    description:
      "Expert Microsoft Access database upgrade and migration services for smooth transitions and risk mitigation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/upgrades-and-migration/",
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
