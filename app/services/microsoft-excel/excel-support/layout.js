import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel One on One Training | Microsoft Excel Help & Support",
  description:
    "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",

  keywords: [
    // Core Excel support keywords
    "Excel one on one training",
    "Excel expert support",
    "Excel consultant services",
    "Excel help Australia",
    "remote Excel training",

    // Service-specific
    "Excel troubleshooting help",
    "Excel code review services",
    "Excel migration support",
    "Excel data conversion help",
    "Excel solution documentation",

    // Training-focused
    "custom Excel training",
    "group Excel training",
    "individual Excel sessions",
    "Excel how-to videos",
    "onsite Excel training",

    // Location-based
    "Excel consultants Sydney",
    "Excel training Melbourne",
    "Excel support Brisbane",
    "Excel help Perth",

    // Business-focused
    "corporate Excel training",
    "business Excel support",
    "enterprise Excel solutions",
    "professional Excel guidance",
    "Excel business consulting",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/excel-support/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
