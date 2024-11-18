import PropTypes from "prop-types";
import React from "react";

export const metadata = {
  url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
  title:
    "Microsoft Office 365 Implementation Experts | Office 365 Implementation Consultants | Office Experts Group",
  description:
    "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans that target individuals, businesses, and business-like entities of all sizes. With the tremendous value and sheer amount of choice, it can be overwhelming to choose the right plan for you. Our experts are ready to consult with you.",
  ogTitle: "Microsoft Office 365 Implementation",
  ogDescription:
    "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans that target individuals, businesses, and business-like entities of all sizes. With the tremendous value and sheer amount of choice, it can be overwhelming to choose the right plan for you. Our experts are ready to consult with you.",
  keywords:
    "Microsoft Office 365 Implementation, Office 365 Consultants, Office Experts Group, Office 365 subscription plans, Office 365 consulting services",
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
  ogImage:
    "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
  ogUrl:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterTitle: "Microsoft Office 365 Implementation",
  twitterDescription:
    "The Best Plan For You! Microsoft offers a wide range of Office 365 subscription plans. Consult with our experts to find the best plan for your business.",
  twitterImage:
    "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
