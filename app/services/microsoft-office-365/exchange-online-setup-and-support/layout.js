import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Exchange Online Setup and Support",
  description:
    "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",

  keywords: [
    // Core Exchange/Email services
    "Exchange Online setup",
    // "business email configuration",
    // "email domain setup",
    // "Exchange migration services",
    // "Exchange 365 support",
    // "Exchange Online experts",

    // // Specific services
    // "shared inbox setup",
    // "custom email addresses",
    // "email forwarding configuration",
    // "business domain email",
    // "professional email setup",

    // // Location-based
    // "Exchange setup Sydney",
    // "Exchange experts Melbourne",
    // "Exchange migration Brisbane",
    // "email setup Perth",

    // // Integration/Migration
    // "Office 365 email migration",
    // "Exchange Online integration",
    // "email system upgrade",
    // "business email migration",

    // // Business-specific
    // "corporate email setup",
    // "enterprise email configuration",
    // "business email branding",
    // "company email management",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
