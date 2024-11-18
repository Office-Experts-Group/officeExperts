import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Fill In Forms | Word Form Design | Form Experts",
  description:
    "Expert Word form design services specializing in user-friendly data entry solutions, form controls, and VBA integration. Professional form templates with consistent formatting.",

  // OpenGraph
  openGraph: {
    title: "Word Fill In Forms & Form Design Services",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/",
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

  // Additional metadata
  keywords: [
    // Core form services
    "Word form design",
    "fill in forms Word",
    "Word form templates",
    "form controls Word",
    "Word data entry forms",

    // Technical aspects
    "VBA form integration",
    "Word form automation",
    "form data extraction",
    "protected Word forms",
    "Word form controls",

    // Service-specific
    "user friendly forms",
    "Word document forms",
    "business form design",
    "form template creation",
    "custom Word forms",

    // Business benefits
    "consistent data entry",
    "form design services",
    "professional forms",
    "form development",
    "business documentation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Fill In Forms & Form Design Services",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/",
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
