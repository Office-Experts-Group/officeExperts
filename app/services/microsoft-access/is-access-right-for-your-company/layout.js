import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Why To Choose Access for your Company | Office Expert Australia",
  description:
    "Expert guidance on whether Microsoft Access is the right solution for your business needs. Get professional advice on database solutions, data management, and business automation.",

  // Additional metadata
  keywords: [
    // Core Access services
    "Microsoft Access solutions",
    // "Access database consulting",
    // "Access database development",
    // "database management solutions",
    // "business database systems",

    // // Technology specific
    // "Microsoft Access expertise",
    // "Access database advice",
    // "database technology selection",
    // "SQL Server integration",
    // "cloud database solutions",

    // // Business focused
    // "business database solutions",
    // "corporate database systems",
    // "enterprise data management",
    // "business process automation",
    // "data management strategy",

    // // Solution specific
    // "custom database development",
    // "database integration services",
    // "multi-user databases",
    // "database reporting solutions",
    // "database migration services",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
