import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Development | Office Expert Australia",
  description:
    "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  keywords: [
    // Core VBA services
    "VBA macro development",
    "VBA programming",
    "Office VBA solutions",
    "macro automation",
    "VBA consultants Australia",

    // Product-specific
    "Excel VBA development",
    "Access VBA programming",
    "Word VBA solutions",
    "Outlook VBA macros",
    "PowerPoint VBA automation",

    // Service-specific
    "custom macro development",
    "VBA code optimization",
    "macro troubleshooting",
    "VBA debugging services",
    "macro conversion services",

    // Business solutions
    "business process automation",
    "workflow automation",
    "data processing macros",
    "VBA add-in development",
    "form automation VBA",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
