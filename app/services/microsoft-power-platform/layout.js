import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Power Platform Services",
  description:
    "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software. We specialise in custom business applications to efficiently perform daily tasks such as managing customer information, automating approvals and sending notifications.",

  openGraph: {
    title: "Microsoft Power Platform Services",
    description:
      "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software. We specialise in custom business applications to efficiently perform daily tasks.",
    url: "https://www.officeexperts.com.au/services/microsoft-power-platform/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core Power Platform services
    "Microsoft Power Platform consulting",
    "Power Platform solutions Australia",
    "Power Apps development",
    "Power BI consulting",
    "Power Automate solutions",
    "Power Pages development",

    // Location-based
    "Power Platform consultants Sydney",
    "Power Platform experts Melbourne",
    "Power Platform services Brisbane",
    "Power Platform specialists Perth",

    // Service-specific long tail
    "custom Power Apps development",
    "Power BI dashboard creation",
    "Power Automate workflow automation",
    "Power Pages website development",
    "Dataverse integration services",

    // Industry-specific
    "enterprise Power Platform solutions",
    "business process automation",
    "corporate dashboard development",
    "low-code application development",

    // Technology combinations
    "Power Platform SharePoint integration",
    "Power Platform Azure integration",
    "Microsoft 365 integration",
    "Dynamics 365 integration",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Platform Services",
    description:
      "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-power-platform/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
