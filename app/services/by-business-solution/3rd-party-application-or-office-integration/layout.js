import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "3rd Party Application | Office Integration | Office Expert",
  description:
    "We are Integration Experts! Do you have a Microsoft Office or CRM application, an accounting package. Visit our website www.officeexperts.com.au",

  keywords: [
    // Core integration services
    "office integration services",
    "third party application integration",
    "CRM office integration",
    "accounting software integration",
    "ODBC integration",
    "API integration",

    // Specific integrations
    "Xero integration",
    "MYOB integration",
    "Dynamics integration",
    "Salesforce integration",
    "MailChimp integration",

    // Database integration
    "SQL Server integration",
    "Azure database integration",
    "MySQL integration",
    "Oracle integration",
    "Access integration",

    // Office specific
    "Excel integration",
    "Word integration",
    "PowerPoint integration",
    "Office automation",
    "VBA development",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
