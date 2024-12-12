import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and SQL Server Integration",
  description:
    "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases. Contact us for integration solutions.",

  keywords: [
    // Core integration services
    "SQL Server integration",
    "Office SQL integration",
    "database integration Australia",
    "SQL Server consultants",
    "database integration services",

    // Application specific
    "Excel SQL integration",
    "Access SQL integration",
    "Word SQL integration",
    "Visual Studio SQL integration",
    "Office database connectivity",

    // Solution specific
    "automated data extraction",
    "SQL reporting solutions",
    "database interface development",
    "SQL Server automation",
    "custom SQL integration",

    // Technical terms
    "SQL data extraction",
    "database connectivity",
    "automated SQL reporting",
    "SQL Server development",
    "database interface design",
  ],
  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
