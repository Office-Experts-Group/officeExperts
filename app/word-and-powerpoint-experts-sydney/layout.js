import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word and PowerPoint Experts Sydney | Document & Presentation Solutions",
  description:
    "Sydney's leading Microsoft Word and PowerPoint consultants specializing in document design, presentation templates, automation solutions and corporate branding implementation.",

  openGraph: {
    title: "Word and PowerPoint Experts Sydney",
    description:
      "Sydney's leading Microsoft Word and PowerPoint consultants specializing in document design, presentation templates, automation solutions and corporate branding implementation.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/",
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
    // Location-based
    "word powerpoint experts sydney",
    "microsoft word consultants sydney",
    "powerpoint designers sydney",
    "presentation specialists sydney",
    "document design sydney",

    // Service-specific
    "corporate template design",
    "presentation automation",
    "document branding solutions",
    "professional powerpoint templates",
    "word document automation",

    // Industry-specific
    "corporate presentation design",
    "business document solutions",
    "government document templates",
    "enterprise presentation services",

    // Solution-based
    "custom word templates",
    "automated powerpoint solutions",
    "corporate identity management",
    "document consistency solutions",
    "presentation design services",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Sydney",
    description:
      "Sydney's leading Microsoft Word and PowerPoint consultants specializing in document design, presentation templates, automation solutions and corporate branding implementation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/",
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
