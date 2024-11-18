import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Our Microsoft Power Automate Services",
  description:
    "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",
  openGraph: {
    title: "Our Microsoft Power Automate Services",
    description:
      "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core automation services
    "Microsoft Power Automate services",
    "Power Automate consulting",
    "workflow automation Australia",
    "business process automation",
    "RPA solutions",

    // Service-specific
    "cloud flows development",
    "business process flows",
    "robotic process automation",
    "process mining services",
    "workflow optimization",

    // Location-based
    "Power Automate consultants Sydney",
    "Power Automate experts Melbourne",
    "workflow automation Brisbane",
    "RPA solutions Perth",

    // Technology combinations
    "Microsoft Power Platform integration",
    "Power Automate Azure integration",
    "Office 365 workflow automation",
    "legacy system integration",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformX",
    title: "Our Microsoft Power Automate Services",
    description:
      "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate/",
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
