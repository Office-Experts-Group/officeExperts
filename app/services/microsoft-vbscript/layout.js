import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBScript Support | Need A VBScript Programmer | Excel Experts",
  description:
    "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks. Contact us for expert VBScript development.",

  // OpenGraph
  openGraph: {
    title: "VBScript Support | Professional VBScript Programming Services",
    description:
      "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks. Contact us for expert VBScript development.",
    url: "https://www.officeexperts.com.au/services/microsoft-vbscript/",
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
    // Core VBScript services
    "VBScript programming",
    "VBScript automation",
    "Windows script programming",
    "VBScript development services",
    "VBScript consultant",

    // Specific solutions
    "Windows task automation",
    "batch processing scripts",
    "command line automation",
    "file processing automation",
    "system task scheduling",

    // Service types
    "VBScript troubleshooting",
    "VBScript maintenance",
    "script optimization",
    "VBScript debugging",
    "script migration services",

    // Location-based
    "VBScript programmers Australia",
    "VBScript developers Sydney",
    "VBScript consultants Melbourne",
    "automation specialists Brisbane",

    // Business focus
    "business process automation",
    "enterprise scripting solutions",
    "custom script development",
    "automated backup solutions",
    "Windows automation services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "VBScript Support | Professional VBScript Programming Services",
    description:
      "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks. Contact us for expert VBScript development.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-vbscript/",
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
