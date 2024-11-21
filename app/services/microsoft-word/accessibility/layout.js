import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word Accessibility Solutions | Microsoft Word Accessibility",
  description:
    "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",

  openGraph: {
    title: "Word Accessibility Solutions | Microsoft Word Accessibility",
    description:
      "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
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
    // Core accessibility services
    "word accessibility solutions",
    "microsoft word accessibility",
    "accessible word documents",
    "word document accessibility",
    "accessible document templates",

    // Location-based
    "accessibility consultants sydney",
    "accessibility services melbourne",
    "accessibility specialists brisbane",
    "accessibility experts perth",

    // Service-specific long tail
    "government document accessibility",
    "corporate document accessibility",
    "accessible template design",
    "WCAG compliant documents",
    "document accessibility standards",

    // Industry-specific
    "government accessibility solutions",
    "enterprise document accessibility",
    "corporate accessibility services",
    "accessibility compliance services",

    // Technology combinations
    "microsoft office accessibility",
    "word template accessibility",
    "document accessibility automation",
    "accessibility standards compliance",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Accessibility Solutions | Microsoft Word Accessibility",
    description:
      "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
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
