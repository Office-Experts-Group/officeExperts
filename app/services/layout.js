import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Development Services | Office Experts Solutions Australia",
  description:
    "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",

  openGraph: {
    title:
      "Microsoft Development Services | Office Experts Solutions Australia",
    description:
      "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services/",
  },

  keywords: [
    // Core services
    "microsoft office development services australia",
    // "custom office solutions development",
    // "microsoft office consulting services",
    // "office automation development",
    // "microsoft integration services",

    // // Product specific
    // "excel development services",
    // "access database development",
    // "power platform consulting",
    // "sharepoint development services",
    // "azure cloud solutions",

    // // Service specific
    // "office vba macro development",
    // "custom office template creation",
    // "microsoft database solutions",
    // "office workflow automation",
    // "power bi dashboard development",

    // // Location based
    // "microsoft office services sydney",
    // "office development melbourne",
    // "microsoft consulting brisbane",
    // "office experts perth",
    // "microsoft services australia wide",
  ],
  canonical: "https://www.officeexperts.com.au/services/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
