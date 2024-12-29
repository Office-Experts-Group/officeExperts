import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Consulting | Low-Code Web Development",
  description:
    "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",
  // Additional metadata
  keywords: [
    // Core services
    // "Power Pages consulting",
    "Microsoft Power Pages developers",
    // "low-code web development",
    // "business website development",

    // // Service-specific
    // "Power Pages integration",
    // "Microsoft Dataverse integration",
    // "Power Platform web solutions",
    // "secure business websites",

    // // Location-based
    // "Power Pages consultants Australia",
    // "Microsoft web developers Sydney",
    // "Power Pages experts Melbourne",
    // "website consultants Brisbane",

    // // Feature-specific
    // "business data visualization",
    // "role-based security websites",
    // "web form development",
    // "Microsoft Azure compliance",

    // // Solution-specific
    // "business process automation",
    // "custom website solutions",
    // "data-driven websites",
    // "enterprise web development",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
