import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Refund Policy | Office Experts Group",
  description:
    "This Refund Policy should be read in conjunction with our Service Agreement. Your rights under the Service Agreement can be found at section 15.\n\n1. Refunds for legal services provided\nOffice Experts Group is bound by Australian Consumer Law ('ACL') obligations to provide IT services with due care and skill within a reasonable period of time.",

  // OpenGraph
  openGraph: {
    title: "Refund Policy",
    description:
      "This Refund Policy should be read in conjunction with our Service Agreement. Your rights under the Service Agreement can be found at section 15.\n\n1. Refunds for legal services provided\nOffice Experts Group is bound by Australian Consumer Law ('ACL') obligations to provide IT services with due care and skill within a reasonable period of time.",
    url: "https://www.officeexperts.com.au/refund-policy/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Refund Policy | Office Experts Group",
    description:
      "This Refund Policy should be read in conjunction with our Service Agreement. Your rights under the Service Agreement can be found at section 15.",
    images: [
      "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional metadata

  canonical: "https://www.officeexperts.com.au/refund-policy/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
