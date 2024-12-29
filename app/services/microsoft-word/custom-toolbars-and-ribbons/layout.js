import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word Toolbar Customization | Custom Word Ribbon Design | Custom Toolbar Development",
  description:
    "Expert customization of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",

  openGraph: {
    title: "Custom Word Toolbars & Ribbons Development Services",
    description:
      "Expert customization of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
  },

  keywords: [
    // Core services
    "custom word ribbon design",
    // "word toolbar customization",
    // "microsoft word toolbar development",
    // "word ribbon automation",
    // "custom toolbar services",

    // // Specific features
    // "word document automation",
    // "custom word buttons",
    // "word interface customization",
    // "word toolbar programming",
    // "word ribbon modification",

    // // Business benefits
    // "business document automation",
    // "document workflow optimization",
    // "document creation efficiency",
    // "document productivity tools",
    // "automated document elements",

    // // Location-specific
    // "word toolbar services australia",
    // "word customization sydney",
    // "document automation melbourne",
    // "word ribbon experts brisbane",
    // "custom word solutions perth",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
