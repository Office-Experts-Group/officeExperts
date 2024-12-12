import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Online Access Database Solutions | Microsoft Access Online",
  description:
    "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",

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

  canonical:
    "https://www.accessexperts.com.au/services/microsoft-access/access-online/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
