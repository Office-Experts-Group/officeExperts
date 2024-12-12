import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Database Solutions Australia",
  description:
    "Professional Microsoft Access database consulting and development services across Australia. Specializing in custom database solutions, cloud integration, and business automation.",

  keywords: [
    // Core database services
    "Microsoft Access consulting",
    "Access database development",
    "database solutions Australia",
    "Access database migration",
    "custom database development",

    // Specific solutions
    "Access cloud solutions",
    "Azure database integration",
    "Access database upgrade",
    "database conversion services",
    "Access online solutions",

    // Service-specific long tail
    "Access data management solutions",
    "Access multi-user databases",
    "Access reporting solutions",
    "database structuring services",
    "Access query optimization",

    // Integration focused
    "Access SQL integration",
    "SharePoint database integration",
    "third party database integration",
    "Access Azure migration",
    "database cloud solutions",

    // Support and maintenance
    "Access database support",
    "database maintenance services",
    "Access troubleshooting",
    "database repair services",
    "Access database training",
  ],
  canonical: "https://www.officeexperts.com.au/services/microsoft-access/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
