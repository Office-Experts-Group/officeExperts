import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Custom PowerPoint Templates and Presentations",
  description:
    "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
  keywords: [
    // Core PowerPoint services
    // "PowerPoint template design",
    "custom PowerPoint template designers",
    // "corporate PowerPoint design",
    // "PowerPoint master slides",
    // "professional PowerPoint templates",

    // // Location-based
    // "PowerPoint designers Sydney",
    // "PowerPoint templates Melbourne",
    // "PowerPoint services Brisbane",
    // "PowerPoint consultants Perth",

    // // Service-specific long tail
    // "branded PowerPoint templates",
    // "corporate presentation design",
    // "PowerPoint style guides",
    // "PowerPoint brand consistency",
    // "PowerPoint design services",

    // // Industry-specific
    // "business PowerPoint templates",
    // "enterprise presentation design",
    // "corporate PowerPoint solutions",
    // "professional slide design",

    // // Template specific
    // "PowerPoint master templates",
    // "presentation theme design",
    // "slide layout templates",
    // "PowerPoint branding templates",
    // "custom slide designs",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
