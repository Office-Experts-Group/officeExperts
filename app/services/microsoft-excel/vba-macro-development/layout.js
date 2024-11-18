import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers",
  description:
    "All Microsoft Office products including Excel, Access, Word, Outlook, PowerPoint and Office 365 come with a built-in macro language called VBA. Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development",
    description:
      "Professional VBA macro development services for Microsoft Office applications. Expert VBA programmers delivering automated business solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
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
    // Core VBA services
    "VBA macro development",
    "VBA programming services",
    "Office VBA solutions",
    "macro developers Australia",
    "custom VBA development",

    // Product-specific
    "Excel VBA macros",
    "Access VBA development",
    "Word VBA automation",
    "Outlook VBA solutions",
    "PowerPoint VBA macros",

    // Business solutions
    "business process automation",
    "VBA automation solutions",
    "Office workflow automation",
    "custom macro development",
    "VBA business tools",

    // Technical
    "VBA code development",
    "macro programming",
    "Office add-in development",
    "VBA integration services",
    "automated Office solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "VBA Macro Development Services | Office Experts Group",
    description:
      "Professional VBA macro development services for Microsoft Office applications. Expert VBA programmers delivering automated business solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
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
