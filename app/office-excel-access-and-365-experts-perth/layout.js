import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Office, Excel, Access and 365 Experts - Perth",
  description:
    "Leading Microsoft Office consulting and solutions provider in Perth. Specialising in Excel, Access, and Office 365 solutions, integration, and business automation.",

  openGraph: {
    title: "Office, Excel, Access and 365 Experts - Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specialising in Excel, Access, and Office 365 solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
  },

  keywords: [
    // Perth-specific
    "Microsoft Office consultants Perth",
    "Excel consultants Perth",
    "Office 365 consultants Perth",
    "Access database specialists Perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office, Excel, Access and 365 Experts - Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specializing in Excel, Access, and Office 365 solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
