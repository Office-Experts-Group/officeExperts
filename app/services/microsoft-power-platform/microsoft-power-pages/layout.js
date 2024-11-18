import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Consulting | Low-Code Web Development",
  description:
    "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Consulting Services",
    description:
      "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",
    url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
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
    "Power Pages consulting",
    "Microsoft Power Pages development",
    "low-code web development",
    "business website development",

    // Service-specific
    "Power Pages integration",
    "Microsoft Dataverse integration",
    "Power Platform web solutions",
    "secure business websites",

    // Location-based
    "Power Pages consultants Australia",
    "Microsoft web developers Sydney",
    "Power Pages experts Melbourne",
    "website consultants Brisbane",

    // Feature-specific
    "business data visualization",
    "role-based security websites",
    "web form development",
    "Microsoft Azure compliance",

    // Solution-specific
    "business process automation",
    "custom website solutions",
    "data-driven websites",
    "enterprise web development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Pages Consulting Services",
    description:
      "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
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
