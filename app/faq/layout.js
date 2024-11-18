import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about our Microsoft Office consulting services, including Excel, Word, PowerPoint, Access, and Office 365 solutions.",

  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our Microsoft Office consulting services and solutions.",
    url: "https://www.officeexperts.com.au/faq/",
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
    // Service FAQ keywords
    "Office consulting FAQ",
    "Microsoft Office support questions",
    "Office 365 migration FAQ",
    "Excel consulting questions",

    // Solution-specific
    "PowerPoint template FAQ",
    "Excel automation questions",
    "Access database FAQ",
    "Word template support",

    // Location-based
    "Microsoft consultants Australia FAQ",
    "Office experts Sydney questions",
    "Melbourne Excel consulting FAQ",
    "Brisbane Office support",

    // Service-related
    "remote Office support",
    "onsite consulting services",
    "Office training questions",
    "Microsoft solution pricing",

    // Technical
    "VBA development FAQ",
    "Office integration questions",
    "custom Office solutions",
    "Microsoft automation support",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/faq/",
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
