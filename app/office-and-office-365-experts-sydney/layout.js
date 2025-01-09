import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Office and Office 365 Experts Sydney | Microsoft Office Consultants Sydney",
  description:
    "Leading Microsoft Office and Office 365 consultants in Sydney. Specialising in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Sydney | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office and Office 365 consultants in Sydney. Specialising in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-sydney/",
  },

  // Additional metadata
  keywords: [
    // Location-based
    "Office consultants Sydney",
    "Office 365 experts Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Sydney | Microsoft Office Solutions",
    description:
      "Leading Microsoft Office and Office 365 consultants in Sydney. Specializing in Excel, Access, Word, PowerPoint development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-and-office-365-experts-sydney/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
