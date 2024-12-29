import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training",
  description:
    "Our expert team provides Microsoft Access database support and training services. We offer instant help and advice through remote access or phone support, with competitive rates and dedicated consultants available when you need them most.",

  keywords: [
    "Access database support",
    // Core services
    // "Microsoft Access support",
    // "Access database training",
    // "Access consultants Australia",
    // "Microsoft Access help",

    // // Service-specific
    // "remote Access support",
    // "Access phone support",
    // "Access database consulting",
    // "Microsoft Access consulting",
    // "Access database experts",

    // // Training specific
    // "Microsoft Access training",
    // "Access database training",
    // "custom Access training",
    // "personalized Access training",
    // "Access consultant training",

    // // Location-based
    // "Access support Sydney",
    // "Access training Melbourne",
    // "Access consultants Brisbane",
    // "Access database Perth",

    // // Business focused
    // "business Access support",
    // "corporate Access training",
    // "enterprise Access solutions",
    // "professional Access help",
  ],

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/access-support/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
