import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "PowerPoint Consulting Services | PowerPoint Design | PowerPoint Experts",
  description:
    "Expert Microsoft PowerPoint consulting services in Australia. Specialising in custom templates, presentation design, automation and training.",

  keywords: [
    // Core PowerPoint services
    "Microsoft PowerPoint consultation",
    // "PowerPoint presentation design",
    // "PowerPoint template creation",
    // "PowerPoint VBA automation",
    // "PowerPoint training services",

    // // Location-based
    // "PowerPoint consultants Sydney",
    // "PowerPoint experts Melbourne",
    // "PowerPoint services Brisbane",
    // "PowerPoint specialists Perth",

    // // Service-specific
    // "corporate PowerPoint templates",
    // "PowerPoint master slides",
    // "PowerPoint presentation redesign",
    // "PowerPoint automation solutions",
    // "PowerPoint user training",

    // // Industry-specific
    // "corporate presentation design",
    // "business PowerPoint solutions",
    // "enterprise PowerPoint consulting",
    // "professional presentation services",

    // // Technical combinations
    // "PowerPoint VBA development",
    // "PowerPoint data integration",
    // "PowerPoint template automation",
    // "PowerPoint brand compliance",
  ],

  canonical: "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
