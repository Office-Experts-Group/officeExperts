import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Custom PowerPoint Templates and Presentations",
  description:
    "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",

  openGraph: {
    title: "Custom PowerPoint Templates and Presentations",
    description:
      "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
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
    // Core PowerPoint services
    "PowerPoint template design",
    "custom PowerPoint templates",
    "corporate PowerPoint design",
    "PowerPoint master slides",
    "professional PowerPoint templates",

    // Location-based
    "PowerPoint designers Sydney",
    "PowerPoint templates Melbourne",
    "PowerPoint services Brisbane",
    "PowerPoint consultants Perth",

    // Service-specific long tail
    "branded PowerPoint templates",
    "corporate presentation design",
    "PowerPoint style guides",
    "PowerPoint brand consistency",
    "PowerPoint design services",

    // Industry-specific
    "business PowerPoint templates",
    "enterprise presentation design",
    "corporate PowerPoint solutions",
    "professional slide design",

    // Template specific
    "PowerPoint master templates",
    "presentation theme design",
    "slide layout templates",
    "PowerPoint branding templates",
    "custom slide designs",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom PowerPoint Templates and Presentations",
    description:
      "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
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
