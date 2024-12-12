import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBScript Support | Need A VBScript Programmer | Excel Experts",
  description:
    "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks. Contact us for expert VBScript development.",

  keywords: [
    // Core VBScript services
    "VBScript programming",
    "VBScript automation",
    "Windows script programming",
    "VBScript development services",
    "VBScript consultant",

    // Specific solutions
    "Windows task automation",
    "batch processing scripts",
    "command line automation",
    "file processing automation",
    "system task scheduling",

    // Service types
    "VBScript troubleshooting",
    "VBScript maintenance",
    "script optimization",
    "VBScript debugging",
    "script migration services",

    // Location-based
    "VBScript programmers Australia",
    "VBScript developers Sydney",
    "VBScript consultants Melbourne",
    "automation specialists Brisbane",

    // Business focus
    "business process automation",
    "enterprise scripting solutions",
    "custom script development",
    "automated backup solutions",
    "Windows automation services",
  ],
  canonical: "https://www.officeexperts.com.au/services/microsoft-vbscript/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
