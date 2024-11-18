import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Custom 365 Solutions | Custom App Development | Office Experts",
  description:
    "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",

  // OpenGraph
  openGraph: {
    title: "Office 365 Custom App Development & Solutions",
    description:
      "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/app-and-custom-development/",
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

  // Additional metadata
  keywords: [
    // Core service keywords
    "Office 365 app development",
    "custom SharePoint solutions",
    "365 integration services",
    "SharePoint list integration",
    "corporate intranet development",

    // Location-based
    "365 developers Sydney",
    "SharePoint specialists Melbourne",
    "Office 365 consultants Brisbane",
    "custom app developers Perth",

    // Service-specific long tail
    "SharePoint list automation",
    "365 library integration",
    "corporate branding SharePoint",
    "custom 365 applications",
    "SharePoint workflow automation",

    // Industry-specific
    "enterprise 365 solutions",
    "corporate SharePoint development",
    "business process automation 365",
    "custom intranet solutions",

    // Technology combinations
    "SharePoint Office 365 integration",
    "Microsoft 365 custom development",
    "365 business automation",
    "SharePoint business solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office 365 Custom App Development & Solutions",
    description:
      "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/app-and-custom-development/",
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
