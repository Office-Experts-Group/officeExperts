import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Publisher Services",
  description:
    "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Publisher Services",
    description:
      "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-publisher/",
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
    // Core Publisher services
    "Microsoft Publisher templates",
    "Publisher design services",
    "Publisher consulting",
    "corporate publishing solutions",
    "professional layout design",

    // Location-based
    "Publisher experts Australia",
    "Publisher consultants Sydney",
    "Publisher design Melbourne",
    "Publisher services Brisbane",

    // Service-specific long tail
    "corporate branding templates",
    "Publisher document migration",
    "Publisher format conversion",
    "custom Publisher layouts",
    "Publisher template development",

    // Industry-specific
    "business publishing solutions",
    "corporate identity design",
    "enterprise publishing services",
    "professional document templates",

    // Feature combinations
    "Publisher accessibility solutions",
    "Publisher corporate styles",
    "Publisher online documents",
    "Publisher training services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Publisher Services",
    description:
      "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-publisher/",
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
