import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Word Remove Repetition | Word Increase Productivity | Word Document Services | Word Experts",
  description:
    "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",

  // OpenGraph
  openGraph: {
    title: "Word Remove Repetition and Increase Productivity",
    description:
      "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word automation services",
    "document productivity solutions",
    "Microsoft Word efficiency",
    "document automation tools",
    "Word template automation",

    // Features
    "automated document creation",
    "document element automation",
    "Word document efficiency",
    "business document automation",
    "Word process automation",

    // Benefits
    "reduce document repetition",
    "increase Word productivity",
    "improve document efficiency",
    "streamline Word processes",
    "automate Word tasks",

    // Business focus
    "business document solutions",
    "corporate Word automation",
    "enterprise Word solutions",
    "professional Word services",
    "document productivity consulting",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
