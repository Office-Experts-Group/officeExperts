import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Office 365 Support and Managed Services",
  description:
    "Expert Office 365 managed services and support to help your business focus on core operations while we handle the technical aspects of Office 365.",

  keywords: [
    "Office 365 managed services",
    "Office 365 support Australia",
    "Office 365 technical support",
    "Office 365 business solutions",
    "Office 365 maintenance",
    "Office 365 consulting services",
    "Office 365 help desk",
    "Office 365 troubleshooting",
    "Office 365 expert support",
    "Office 365 management",
    "Office 365 business automation",
    "Office 365 remote support",
    "Office 365 onsite support",
    "Office 365 ongoing support",
    "Office 365 enterprise support",
    "Office 365 support specialists",
    "Office 365 business consulting",
    "Office 365 migration support",
    "Office 365 integration services",
    "Office 365 technical consulting",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/support-and-managed-services/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
