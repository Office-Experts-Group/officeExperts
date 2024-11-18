import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Richmond",
  description:
    "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specializing in templates, document design, presentations, automation and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Richmond",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specializing in templates, document design, presentations, automation and business solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/",
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
    // Core services
    "Microsoft Word experts Richmond",
    "PowerPoint consultants Richmond",
    "document design Richmond",
    "presentation design Richmond",
    "Word template design Richmond",
    "PowerPoint template design Richmond",

    // Service specific
    "Word automation Richmond",
    "PowerPoint automation Richmond",
    "document solutions Richmond",
    "presentation solutions Richmond",
    "Word document design Richmond",
    "PowerPoint slide design Richmond",

    // Business focused
    "business document solutions Richmond",
    "corporate presentation design Richmond",
    "business template design Richmond",
    "professional document services Richmond",

    // Integration/Technical
    "Word integration Richmond",
    "PowerPoint integration Richmond",
    "Office automation Richmond",
    "document workflow Richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Richmond",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specializing in templates, document design, presentations, automation and business solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/",
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
