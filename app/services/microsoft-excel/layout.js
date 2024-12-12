import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Excel Consulting | Excel Programmers | Excel Experts",
  description:
    "Our Microsoft Excel programming services can enhance your productivity. Contact our expert Excel specialists to help your business excel.",

  keywords: [
    // Core Excel services
    "Excel consulting services",
    "Excel programmers Australia",
    "Excel VBA development",
    "Excel macro programming",
    "Excel automation solutions",

    // Feature specific
    "Excel dashboard development",
    "Excel data manipulation",
    "Excel formula experts",
    "Excel pivot table solutions",
    "Excel charting services",

    // Integration focused
    "Excel database integration",
    "Excel SharePoint connection",
    "Excel API integration",
    "Excel cloud solutions",
    "Excel SQL integration",

    // Business solutions
    "Excel business automation",
    "Excel reporting solutions",
    "Excel analytics tools",
    "Excel financial modeling",
    "Excel data analysis",
  ],

  canonical: "https://www.officeexperts.com.au/services/microsoft-excel/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
