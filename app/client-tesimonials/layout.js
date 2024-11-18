import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Office Experts Group",
  description:
    "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimize their operations and improve efficiency.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Group Client Testimonials",
    description:
      "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimize their operations and improve efficiency.",
    url: "https://www.officeexperts.com.au/client-testimonials/",
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
    // Core testimonial keywords
    "Office Experts testimonials",
    "Microsoft Office consulting reviews",
    "Office solutions feedback",
    "client testimonials Australia",

    // Client-specific
    "business automation testimonials",
    "Office integration reviews",
    "enterprise Office solutions reviews",

    // Industry-specific
    "corporate testimonials",
    "government sector reviews",
    "business client feedback",

    // Service-specific
    "Excel consulting reviews",
    "Access database testimonials",
    "PowerPoint solutions feedback",
    "Word template reviews",

    // Location-based
    "Sydney Office consultants reviews",
    "Melbourne Office experts testimonials",
    "Brisbane Office solutions feedback",
    "Perth Office consulting reviews",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group Client Testimonials",
    description:
      "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimize their operations and improve efficiency.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/client-testimonials/",
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
