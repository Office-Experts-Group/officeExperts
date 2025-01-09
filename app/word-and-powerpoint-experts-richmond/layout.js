import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Richmond",
  description:
    "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specialising in templates, document design, presentations, automation and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Richmond",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specialising in templates, document design, presentations, automation and business solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Microsoft Word experts Richmond",
    "PowerPoint consultants Richmond",
    // "document design Richmond",
    // "presentation design Richmond",
    // "Word template design Richmond",
    // "PowerPoint template design Richmond",

    // // Service specific
    // "Word automation Richmond",
    // "PowerPoint automation Richmond",
    // "document solutions Richmond",
    // "presentation solutions Richmond",
    // "Word document design Richmond",
    // "PowerPoint slide design Richmond",

    // // Business focused
    // "business document solutions Richmond",
    // "corporate presentation design Richmond",
    // "business template design Richmond",
    // "professional document services Richmond",

    // // Integration/Technical
    // "Word integration Richmond",
    // "PowerPoint integration Richmond",
    // "Office automation Richmond",
    // "document workflow Richmond",
  ],
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
