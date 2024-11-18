import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Development | Office Expert Australia",
  description:
    "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development",
    description:
      "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
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
    // Core VBA services
    "VBA macro development",
    "VBA programming",
    "Office VBA solutions",
    "macro automation",
    "VBA consultants Australia",

    // Product-specific
    "Excel VBA development",
    "Access VBA programming",
    "Word VBA solutions",
    "Outlook VBA macros",
    "PowerPoint VBA automation",

    // Service-specific
    "custom macro development",
    "VBA code optimization",
    "macro troubleshooting",
    "VBA debugging services",
    "macro conversion services",

    // Business solutions
    "business process automation",
    "workflow automation",
    "data processing macros",
    "VBA add-in development",
    "form automation VBA",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "VBA Macro Development",
    description:
      "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
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
