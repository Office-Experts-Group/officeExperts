import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Pivot Tables | Charts and Reporting Solutions",
  description:
    "Expert Microsoft Excel pivot table, charting and reporting solutions. Get professional help with creating pivot tables, charts, and customized reporting solutions.",

  keywords: [
    // Core pivot table services
    "Excel pivot tables",
    "pivot table consulting",
    "Excel pivot charts",
    "pivot table training",
    "custom pivot tables",

    // Reporting focused
    "Excel reporting solutions",
    "business reporting Excel",
    "advanced Excel reports",
    "Excel dashboard creation",
    "automated Excel reporting",

    // Service-specific long tail
    "pivot table development",
    "custom Excel charting",
    "Excel data visualization",
    "Excel VBA reporting",
    "Power Pivot solutions",

    // Industry-specific
    "corporate Excel reporting",
    "business analytics Excel",
    "financial reporting Excel",
    "sales dashboard Excel",

    // Location-based
    "pivot table experts Australia",
    "Excel reporting consultants",
    "Excel charting services",
    "pivot table specialists",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
