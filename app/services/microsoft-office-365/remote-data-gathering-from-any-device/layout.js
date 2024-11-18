import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Office 365 Implementation Services",
  description:
    "Professional Office 365 implementation and migration services. Expert consultants for successful Office 365 deployment across your organization.",

  openGraph: {
    title: "Microsoft Office 365 Implementation Services",
    description:
      "Expert Office 365 implementation services for businesses of all sizes. Seamless migration and deployment solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
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
    // Core implementation
    "Office 365 implementation",
    "Office 365 deployment services",
    "365 setup services",
    "Office 365 rollout",

    // Migration focused
    "Office 365 migration planning",
    "365 transition services",
    "email migration Office 365",
    "SharePoint migration",

    // Location-based
    "Office 365 consultants Sydney",
    "365 implementation Melbourne",
    "Office 365 services Brisbane",
    "Microsoft 365 experts Perth",

    // Service-specific
    "enterprise 365 deployment",
    "business 365 setup",
    "Office 365 configuration",
    "365 tenant setup",

    // Technical
    "Office 365 integration",
    "365 security setup",
    "Exchange Online deployment",
    "Teams implementation",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Office 365 Implementation Services",
    description:
      "Expert Office 365 implementation services for businesses of all sizes. Seamless migration and deployment solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation/",
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
