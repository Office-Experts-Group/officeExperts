import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word and PowerPoint Experts Sydney | Document & Presentation Solutions",
  description:
    "Sydney's leading Microsoft Word and PowerPoint consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",

  openGraph: {
    title: "Word and PowerPoint Experts Sydney",
    description:
      "Sydney's leading Microsoft Word and PowerPoint consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/",
  },

  keywords: [
    // Location-based
    "word powerpoint experts sydney",
    "powerpoint designers sydney",
    // "microsoft word consultants sydney",
    // "presentation specialists sydney",
    // "document design sydney",

    // // Service-specific
    // "corporate template design",
    // "presentation automation",
    // "document branding solutions",
    // "professional powerpoint templates",
    // "word document automation",

    // // Industry-specific
    // "corporate presentation design",
    // "business document solutions",
    // "government document templates",
    // "enterprise presentation services",

    // // Solution-based
    // "custom word templates",
    // "automated powerpoint solutions",
    // "corporate identity management",
    // "document consistency solutions",
    // "presentation design services",
  ],
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
