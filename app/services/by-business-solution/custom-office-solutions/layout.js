import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Custom Office Solutions | Office Expert Australia",
  description:
    "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 102 810",

  // Additional metadata
  keywords: [
    // Core custom solution services
    "custom Microsoft Office solutions Australia",
    // "Office customization services",
    // "bespoke Office development",
    // "tailored Office solutions",
    // "custom Office automation",

    // // Product-specific solutions
    // "custom Excel solutions",
    // "custom Access solutions",
    // "custom Word templates",
    // "PowerPoint customization",
    // "Outlook automation",

    // // Business solution focus
    // "business process automation",
    // "document automation solutions",
    // "workflow optimization",
    // "data processing solutions",
    // "reporting automation",

    // // Industry/purpose specific
    // "enterprise Office customization",
    // "corporate Office solutions",
    // "business efficiency solutions",
    // "productivity enhancement tools",
    // "document management solutions",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
