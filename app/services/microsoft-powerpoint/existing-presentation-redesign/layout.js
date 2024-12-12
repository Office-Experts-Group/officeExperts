import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "PowerPoint Presentation Redesign Services",
  description:
    "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides and brand guidelines.",

  keywords: [
    // Core PowerPoint services
    "PowerPoint presentation redesign",
    "PowerPoint template redesign",
    "PowerPoint makeover services",
    "PowerPoint slide design",
    "PowerPoint master slides",

    // Branding focused
    "corporate PowerPoint templates",
    "brand compliant presentations",
    "PowerPoint brand guidelines",
    "corporate presentation design",

    // Location-based
    "PowerPoint designers Sydney",
    "PowerPoint experts Melbourne",
    "presentation design Brisbane",
    "PowerPoint services Perth",

    // Service-specific
    "professional PowerPoint redesign",
    "PowerPoint template conversion",
    "presentation modernization",
    "slide deck transformation",

    // Industry-specific
    "business presentation design",
    "corporate PowerPoint services",
    "enterprise presentation solutions",
    "government presentation redesign",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
