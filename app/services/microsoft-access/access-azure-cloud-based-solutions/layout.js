import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Azure Cloud Access Solution",
  description:
    "Microsoft Azure cloud hosting solutions for Access databases. Host your data securely in the cloud and access it from anywhere with our custom built Access databases and cloud integration services.",

  // Additional metadata
  keywords: [
    // Core Azure/Access services
    "Azure cloud database",
    "Access cloud solutions",
    "Azure database hosting",
    "cloud based Access",
    "Azure SQL database",

    // Features and capabilities
    "remote database access",
    "cloud data storage",
    "Access Azure integration",
    "database migration Azure",
    "cloud database conversion",

    // Service-specific
    "Azure database development",
    "Access cloud migration",
    "Azure hosting services",
    "cloud database solutions",
    "Azure SQL deployment",

    // Industry/business focus
    "business cloud solutions",
    "enterprise database hosting",
    "Azure corporate solutions",
    "cloud database management",
    "Access business solutions",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
