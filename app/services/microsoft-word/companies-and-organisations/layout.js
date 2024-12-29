import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Companies and Organizations | Word Document Services",
  description:
    "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",

  keywords: [
    "word template designers",
    // "corporate document solutions",
    // "microsoft word templates",
    // "document branding",
    // "corporate identity protection",
    // "word document formatting",
    // "inhouse report generation",
    // "corporate branding guidelines",
    // "document automation",
    // "word template consulting",
    // "corporate style management",
    // "document standardization",
    // "business document templates",
    // "word formatting control",
    // "corporate document management",
  ],

  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
