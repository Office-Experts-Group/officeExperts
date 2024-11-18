import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "PowerPoint Presentation Redesign Services",
  description:
    "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides and brand guidelines.",

  openGraph: {
    title: "PowerPoint Presentation Redesign Services",
    description:
      "Transform your existing presentations into professional, high-quality templates that meet brand guidelines and corporate standards.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
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
    "PowerPoint presentation redesign",
    "PowerPoint template redesign",
    "PowerPoint makeover services",
    "PowerPoint slide design",
    "PowerPoint master slides",

    // Branding focused
    "corporate PowerPoint templates",
    "brand compliant presentations",
    "PowerPoint brand guidelines",
    "corporate presentation design",

    // Location-based
    "PowerPoint designers Sydney",
    "PowerPoint experts Melbourne",
    "presentation design Brisbane",
    "PowerPoint services Perth",

    // Service-specific
    "professional PowerPoint redesign",
    "PowerPoint template conversion",
    "presentation modernization",
    "slide deck transformation",

    // Industry-specific
    "business presentation design",
    "corporate PowerPoint services",
    "enterprise presentation solutions",
    "government presentation redesign",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint Presentation Redesign Services",
    description:
      "Transform your existing presentations into professional, high-quality templates that meet brand guidelines and corporate standards.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
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
