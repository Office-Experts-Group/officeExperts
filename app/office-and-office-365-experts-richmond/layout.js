import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Experts Richmond",
  description:
    "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Richmond",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-richmond/",
  },

  // Additional metadata
  keywords: [
    // Location specific
    "Microsoft office experts richmond",
    "office 365 consultants richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Richmond",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-and-office-365-experts-richmond/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
