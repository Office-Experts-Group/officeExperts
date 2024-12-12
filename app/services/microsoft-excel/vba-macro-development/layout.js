import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers",
  description:
    "All Microsoft Office products including Excel, Access, Word, Outlook, PowerPoint and Office 365 come with a built-in macro language called VBA. Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  keywords: [
    // Core VBA services
    "VBA macro development",
    "VBA programming services",
    "Office VBA solutions",
    "macro developers Australia",
    "custom VBA development",

    // Product-specific
    "Excel VBA macros",
    "Access VBA development",
    "Word VBA automation",
    "Outlook VBA solutions",
    "PowerPoint VBA macros",

    // Business solutions
    "business process automation",
    "VBA automation solutions",
    "Office workflow automation",
    "custom macro development",
    "VBA business tools",

    // Technical
    "VBA code development",
    "macro programming",
    "Office add-in development",
    "VBA integration services",
    "automated Office solutions",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
