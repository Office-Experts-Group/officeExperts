import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Word Document Quick Parts Services | Quick Parts Design Consulting Services | Word Experts",
  description:
    "Our team of Word design experts will deliver your document templates with a gallery of Quick Parts so your users can effortlessly create common Word elements, saving your business time, stress and money.",

  // OpenGraph
  openGraph: {
    title: "Quick Parts",
    description:
      "Our team of Word design experts will deliver your document templates with a gallery of Quick Parts so your users can effortlessly create common Word elements, saving your business time, stress and money.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/quick-parts/",
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
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core Quick Parts services
    "microsoft word quick parts",
    "quick parts gallery",
    "word document quick parts",
    "quick parts consulting",
    "word building blocks",

    // Location-based
    "quick parts services australia",
    "word template consulting sydney",
    "microsoft word services melbourne",
    "document consulting brisbane",
    "word experts perth",

    // Service-specific
    "custom quick parts development",
    "word template automation",
    "document element automation",
    "building blocks gallery",
    "word document efficiency",

    // Industry-specific
    "corporate document solutions",
    "business document automation",
    "enterprise word templates",
    "professional document services",

    // Technology combinations
    "word automation solutions",
    "document productivity tools",
    "microsoft office automation",
    "word template solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Quick Parts",
    description:
      "Our team of Word design experts will deliver your document templates with a gallery of Quick Parts so your users can effortlessly create common Word elements, saving your business time, stress and money.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/quick-parts/",
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
