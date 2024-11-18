import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Business Process Automation | Office 365 Business Automation",
  description:
    "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",

  openGraph: {
    title: "Office 365 Business Process Automation",
    description:
      "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation/",
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
    // Core automation keywords
    "office 365 process automation",
    "business automation office 365",
    "office 365 workflow automation",
    "automated form processing",
    "paperless office automation",

    // Solution specific
    "office 365 forms automation",
    "digital form conversion",
    "automated business workflows",
    "office 365 business processes",
    "electronic form solutions",

    // Business outcomes
    "business process efficiency",
    "workflow streamlining",
    "automated data collection",
    "business report automation",
    "process optimization office 365",

    // Industry specific
    "enterprise process automation",
    "corporate workflow solutions",
    "business automation consulting",
    "office automation services",
    "digital transformation solutions",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office 365 Business Process Automation",
    description:
      "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation/",
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
