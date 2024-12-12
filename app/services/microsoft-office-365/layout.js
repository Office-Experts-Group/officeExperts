import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office 365 Services",
  description:
    "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",

  keywords: [
    // Core Office 365 services
    "Office 365 implementation",
    "Office 365 migration services",
    "Office 365 business automation",
    "Office 365 managed services",
    "Exchange online setup",
    "OneDrive cloud backup",

    // Location-based
    "Office 365 consultants Sydney",
    "Office 365 experts Melbourne",
    "Office 365 migration Brisbane",
    "Office 365 services Perth",

    // Service-specific
    "remote data gathering Office 365",
    "Office 365 process automation",
    "Exchange online configuration",
    "OneDrive business setup",

    // Industry-specific
    "corporate Office 365 solutions",
    "enterprise email migration",
    "business cloud migration",
    "Office 365 support services",

    // Technology combinations
    "SharePoint integration Office 365",
    "Exchange Online migration",
    "Office 365 cloud solutions",
    "Office 365 custom development",
  ],

  canonical: "https://www.officeexperts.com.au/services/microsoft-office-365/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
