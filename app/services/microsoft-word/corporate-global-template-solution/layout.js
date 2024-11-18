import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Corporate Word Solutions",
  description:
    "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",

  openGraph: {
    title: "Corporate Word Solutions",
    description:
      "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
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
    // Core services
    "corporate Word template solution",
    "Word document automation",
    "corporate branding templates",
    "business document templates",
    "Word template design",

    // Features
    "document formatting control",
    "corporate style management",
    "template automation",
    "document consistency",
    "brand guideline compliance",

    // Benefits
    "improved document efficiency",
    "corporate identity protection",
    "document standardization",
    "formatting consistency",
    "controlled document environment",

    // Use cases
    "corporate document creation",
    "business template management",
    "document branding control",
    "style guide enforcement",
    "template standardization",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsG1",
    title: "Corporate Word Solutions",
    description:
      "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.wordexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
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
