import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office 365 Migration | Office 365 Upgrades | Office 365 Help",
  description:
    "Professional Office 365 migration services with no downtime or data loss. Expert migration of emails, files, and systems to Office 365.",

  keywords: [
    // Core migration services
    "Office 365 migration services",
    "email migration Office 365",
    "Office 365 data migration",
    "Office 365 upgrade services",
    "Office 365 transition",

    // Location-based
    "Office 365 migration Sydney",
    "Office 365 migration Melbourne",
    "Office 365 migration Brisbane",
    "Office 365 migration Perth",

    // Service-specific long tail
    "Exchange to Office 365 migration",
    "Gmail to Office 365 migration",
    "OneDrive migration services",
    "Office 365 email transfer",
    "business Office 365 migration",

    // Technical specifics
    "zero downtime migration",
    "data loss prevention migration",
    "secure Office 365 migration",
    "Exchange migration specialist",

    // Migration combinations
    "email and file migration",
    "complete Office 365 transition",
    "business email migration",
    "corporate Office 365 setup",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-migration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
