import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Online Access Database Solutions | Microsoft Access Online",
  description:
    "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",

  openGraph: {
    title: "Online Access Database Solutions | Cloud Database Solutions",
    description:
      "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",
    url: "https://www.accessexperts.com.au/services/microsoft-access/access-online/",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core service keywords
    "online access database solutions",
    "cloud access database",
    "access online solutions",
    "microsoft access cloud",
    "sharepoint access integration",

    // Feature-specific
    "access office 365 integration",
    "access mobile solutions",
    "access cloud storage",
    "access database hosting",
    "access remote database",

    // Solution-specific
    "access ipad solutions",
    "access iphone compatibility",
    "access cloud migration",
    "access database conversion",
    "access web integration",

    // Business focus
    "business database solutions",
    "enterprise access solutions",
    "corporate database systems",
    "access cost effective solutions",
    "cloud database management",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Online Access Database Solutions | Cloud Database Solutions",
    description:
      "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.accessexperts.com.au/services/microsoft-access/access-online/",
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
