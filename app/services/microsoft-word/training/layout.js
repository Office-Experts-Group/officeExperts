import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Word Training",
  description:
    "Our team of Word design experts are available to resolve your issues with Microsoft Word documents and templates. Whenever you need help, our Word experts accept small and large jobs at competitive rates.",

  openGraph: {
    title: "Microsoft Word Training",
    description:
      "Our team of Word design experts are available to resolve your issues with Microsoft Word documents and templates. Whenever you need help, our Word experts accept small and large jobs at competitive rates.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/training/",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core training services
    "Microsoft Word training",
    "Word document training",
    "Word template training",
    "Word expert training",
    "Word consulting services",

    // Service types
    "remote Word training",
    "onsite Word training",
    "individual Word training",
    "group Word training",
    "Word document help",

    // Location-specific
    "Word training Australia",
    "Word consultants Sydney",
    "Word training Melbourne",
    "Word experts Brisbane",
    "Word training Perth",

    // Service features
    "custom Word training",
    "Word troubleshooting help",
    "Word document support",
    "Word template assistance",
    "professional Word guidance",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Training",
    description:
      "Our team of Word design experts are available to resolve your issues with Microsoft Word documents and templates. Whenever you need help, our Word experts accept small and large jobs at competitive rates.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.wordexperts.com.au/services/microsoft-word/training/",
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
