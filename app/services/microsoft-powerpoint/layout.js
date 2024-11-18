import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "PowerPoint Consulting Services | PowerPoint Design | PowerPoint Experts",
  description:
    "Expert Microsoft PowerPoint consulting services in Australia. Specializing in custom templates, presentation design, automation and training.",

  // OpenGraph
  openGraph: {
    title: "PowerPoint Experts Group",
    description:
      "Expert Microsoft PowerPoint consulting services in Australia. Specializing in custom templates, presentation design, automation and training.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
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

  // Keywords extracted from content
  keywords: [
    // Core PowerPoint services
    "PowerPoint consulting services",
    "PowerPoint presentation design",
    "PowerPoint template creation",
    "PowerPoint VBA automation",
    "PowerPoint training services",

    // Location-based
    "PowerPoint consultants Sydney",
    "PowerPoint experts Melbourne",
    "PowerPoint services Brisbane",
    "PowerPoint specialists Perth",

    // Service-specific
    "corporate PowerPoint templates",
    "PowerPoint master slides",
    "PowerPoint presentation redesign",
    "PowerPoint automation solutions",
    "PowerPoint user training",

    // Industry-specific
    "corporate presentation design",
    "business PowerPoint solutions",
    "enterprise PowerPoint consulting",
    "professional presentation services",

    // Technical combinations
    "PowerPoint VBA development",
    "PowerPoint data integration",
    "PowerPoint template automation",
    "PowerPoint brand compliance",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint Experts Group",
    description:
      "Expert Microsoft PowerPoint consulting services in Australia. Specializing in custom templates, presentation design, automation and training.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
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
