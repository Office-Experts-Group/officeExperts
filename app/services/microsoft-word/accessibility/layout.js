import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word Accessibility Solutions | Microsoft Word Accessibility",
  description:
    "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",

  keywords: [
    // Core accessibility services
    "word accessibility solutions",
    "microsoft word accessibility",
    "accessible word documents",
    "word document accessibility",
    "accessible document templates",

    // Location-based
    "accessibility consultants sydney",
    "accessibility services melbourne",
    "accessibility specialists brisbane",
    "accessibility experts perth",

    // Service-specific long tail
    "government document accessibility",
    "corporate document accessibility",
    "accessible template design",
    "WCAG compliant documents",
    "document accessibility standards",

    // Industry-specific
    "government accessibility solutions",
    "enterprise document accessibility",
    "corporate accessibility services",
    "accessibility compliance services",

    // Technology combinations
    "microsoft office accessibility",
    "word template accessibility",
    "document accessibility automation",
    "accessibility standards compliance",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
