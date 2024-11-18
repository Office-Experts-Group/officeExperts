import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBA Automation Experts | PowerPoint Automation | Excel Experts",
  description:
    "PowerPoint experts providing data linking and VBA automation solutions for PowerPoint presentations. Professional automation services for time-saving and accuracy.",

  // OpenGraph
  openGraph: {
    title: "PowerPoint VBA Automation Services",
    description:
      "Expert PowerPoint automation services linking your data directly to presentations, saving time and ensuring accuracy with VBA solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba/",
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
    // Core PowerPoint automation
    "PowerPoint VBA automation",
    "PowerPoint macro development",
    "PowerPoint data linking",
    "automated PowerPoint presentations",
    "PowerPoint automation services",

    // Technical keywords
    "VBA PowerPoint programming",
    "PowerPoint automation solutions",
    "PowerPoint data integration",
    "PowerPoint macro experts",
    "custom PowerPoint automation",

    // Service-specific
    "PowerPoint presentation automation",
    "automated slide creation",
    "PowerPoint data automation",
    "PowerPoint VBA consulting",
    "PowerPoint development services",

    // Business benefits
    "PowerPoint time saving",
    "automated presentation updates",
    "PowerPoint efficiency solutions",
    "presentation accuracy",
    "PowerPoint process automation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint VBA Automation Services",
    description:
      "Expert PowerPoint automation services linking your data directly to presentations, saving time and ensuring accuracy with VBA solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba/",
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
