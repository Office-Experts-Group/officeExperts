import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Office 365 Implementation Services",
  description:
    "Professional Office 365 implementation and migration services. Expert consultants for successful Office 365 deployment across your organization.",

  keywords: [
    // Core implementation
    "Office 365 remote data gathering",
    // "Office 365 deployment services",
    // "365 setup services",
    // "Office 365 rollout",

    // // Migration focused
    // "Office 365 migration planning",
    // "365 transition services",
    // "email migration Office 365",
    // "SharePoint migration",

    // // Location-based
    // "Office 365 consultants Sydney",
    // "365 implementation Melbourne",
    // "Office 365 services Brisbane",
    // "Microsoft 365 experts Perth",

    // // Service-specific
    // "enterprise 365 deployment",
    // "business 365 setup",
    // "Office 365 configuration",
    // "365 tenant setup",

    // // Technical
    // "Office 365 integration",
    // "365 security setup",
    // "Exchange Online deployment",
    // "Teams implementation",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
