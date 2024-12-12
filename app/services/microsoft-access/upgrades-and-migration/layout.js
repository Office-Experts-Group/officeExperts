import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Access Upgrades and Migration",
  description:
    "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",

  keywords: [
    // Core services
    "access database migration",
    "access database upgrade",
    "access migration services",
    "access upgrade services",
    "database migration expert",

    // Specific solutions
    "access compatibility issues",
    "access database conversion",
    "access version upgrade",
    "database performance optimization",
    "sql server migration",

    // Technical terms
    "access azure migration",
    "access cloud migration",
    "access database consulting",
    "database troubleshooting",
    "database corruption fix",

    // Business benefits
    "database efficiency improvement",
    "database modernization",
    "database performance tuning",
    "database reliability enhancement",
    "database speed optimization",

    // Location specific
    "access database experts australia",
    "access migration sydney",
    "access upgrade melbourne",
    "database consultants brisbane",
    "database migration perth",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/upgrades-and-migration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
