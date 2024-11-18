import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Office 365 Support and Managed Services",
  description:
    "Expert Office 365 managed services and support to help your business focus on core operations while we handle the technical aspects of Office 365.",

  openGraph: {
    title: "Office 365 Support and Managed Services",
    description:
      "Expert Office 365 managed services and support solutions across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/support-and-managed-services/",
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

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office 365 Support and Managed Services",
    description:
      "Expert Office 365 managed services and support solutions across Australia.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/support-and-managed-services/",
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
