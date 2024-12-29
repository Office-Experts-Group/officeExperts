import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Experts Melbourne",
  description:
    "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialise in custom Office development, integration, and business automation solutions.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Melbourne",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialise in custom Office development, integration, and business automation solutions.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/",
  },

  // Additional metadata
  keywords: [
    // Location-based
    "Microsoft Office consultants Melbourne",
    "Office 365 consulting Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Melbourne",
    description:
      "Leading Microsoft Office consulting and Office 365 expertise in Melbourne. Our expert consultants specialize in custom Office development, integration, and business automation solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
