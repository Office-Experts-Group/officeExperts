import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Access Database Integration | Access Integration | Access Experts",
  description:
    "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",

  keywords: [
    // Core integration services
    "Access database integration",
    // "Microsoft Access integration",
    // "third party integration Access",
    // "Access system integration",
    // "database integration services",

    // // Specific integration types
    // "CRM Access integration",
    // "accounting software integration",
    // "ERP Access integration",
    // "Office integration Access",

    // // Technical aspects
    // "Access API integration",
    // "database connectivity Access",
    // "Access data integration",
    // "custom Access integration",
    // "Access automation integration",

    // // Business benefits
    // "business process integration",
    // "enterprise Access integration",
    // "integrated database solutions",
    // "automated data integration",

    // // Location-specific
    // "Access integration Australia",
    // "database integration services Sydney",
    // "Melbourne Access integration",
    // "Brisbane database services",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
