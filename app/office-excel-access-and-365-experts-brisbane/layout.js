import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office Experts Brisbane | Microsoft Office Consultants Brisbane",
  description:
    "Leading Microsoft Office consultants in Brisbane specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Brisbane | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Brisbane specialising in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Microsoft Office consultants Brisbane",
    "Excel consultants Brisbane",
    "Access database specialists Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Brisbane | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office consultants in Brisbane specializing in Excel, Access, Word, PowerPoint and Office 365 solutions. Expert development, integration and support.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
