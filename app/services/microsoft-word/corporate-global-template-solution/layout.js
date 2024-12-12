import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Corporate Word Solutions",
  description:
    "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",

  openGraph: {
    title: "Corporate Word Solutions",
    description:
      "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
  },

  keywords: [
    // Core services
    "corporate Word template solution",
    "Word document automation",
    "corporate branding templates",
    "business document templates",
    "Word template design",

    // Features
    "document formatting control",
    "corporate style management",
    "template automation",
    "document consistency",
    "brand guideline compliance",

    // Benefits
    "improved document efficiency",
    "corporate identity protection",
    "document standardization",
    "formatting consistency",
    "controlled document environment",

    // Use cases
    "corporate document creation",
    "business template management",
    "document branding control",
    "style guide enforcement",
    "template standardization",
  ],
  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
