import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training",
  description:
    "Our expert team provides Microsoft Access database support and training services. We offer instant help and advice through remote access or phone support, with competitive rates and dedicated consultants available when you need them most.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support and Training",
    description:
      "Get expert Microsoft Access database support and training with our team of dedicated consultants. Remote or phone support available at competitive rates.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/access-support/",
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
    "Microsoft Access support",
    "Access database training",
    "Access consultants Australia",
    "Microsoft Access help",
    "Access database support",

    // Service-specific
    "remote Access support",
    "Access phone support",
    "Access database consulting",
    "Microsoft Access consulting",
    "Access database experts",

    // Training specific
    "Microsoft Access training",
    "Access database training",
    "custom Access training",
    "personalized Access training",
    "Access consultant training",

    // Location-based
    "Access support Sydney",
    "Access training Melbourne",
    "Access consultants Brisbane",
    "Access database Perth",

    // Business focused
    "business Access support",
    "corporate Access training",
    "enterprise Access solutions",
    "professional Access help",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Support and Training",
    description:
      "Get expert Microsoft Access database support and training with our team of dedicated consultants. Remote or phone support available at competitive rates.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-access/access-support/",
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
