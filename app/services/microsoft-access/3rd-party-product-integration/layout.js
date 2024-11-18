import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Access Database Integration | Access Integration | Access Experts",
  description:
    "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",

  openGraph: {
    title: "Access Database Integration | Access Integration | Access Experts",
    description:
      "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration/",
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
    // Core integration services
    "Access database integration",
    "Microsoft Access integration",
    "third party integration Access",
    "Access system integration",
    "database integration services",

    // Specific integration types
    "CRM Access integration",
    "accounting software integration",
    "ERP Access integration",
    "Office integration Access",

    // Technical aspects
    "Access API integration",
    "database connectivity Access",
    "Access data integration",
    "custom Access integration",
    "Access automation integration",

    // Business benefits
    "business process integration",
    "enterprise Access integration",
    "integrated database solutions",
    "automated data integration",

    // Location-specific
    "Access integration Australia",
    "database integration services Sydney",
    "Melbourne Access integration",
    "Brisbane database services",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Access Database Integration | Access Integration | Access Experts",
    description:
      "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration/",
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
