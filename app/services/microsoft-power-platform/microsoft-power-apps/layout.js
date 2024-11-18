import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Apps Services Australia",
  description:
    "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Apps Services Australia",
    description:
      "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",
    url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-apps/",
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
    // Core services
    "power apps development",
    "custom business apps",
    "canvas apps development",
    "model driven apps",
    "power apps consulting",

    // Location-based
    "power apps services australia",
    "power apps consulting sydney",
    "power apps developers melbourne",
    "power apps solutions brisbane",

    // Service-specific long tail
    "mobile business apps development",
    "power apps integration services",
    "custom power fx development",
    "power apps data source connection",
    "power apps business automation",

    // Industry-specific
    "enterprise power apps solutions",
    "healthcare power apps development",
    "sales team mobile apps",
    "field service power apps",

    // Technology combinations
    "power platform integration",
    "dataverse power apps",
    "power apps sharepoint integration",
    "power apps azure solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Apps Services Australia",
    description:
      "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-apps/",
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
