import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Excel Consulting | Excel Programmers | Excel Experts",
  description:
    "Our Microsoft Excel programming services can enhance your productivity. Contact our expert Excel specialists to help your business excel.",

  openGraph: {
    title: "Excel Experts Group | Microsoft Excel Consulting",
    description:
      "Professional Microsoft Excel consulting services specializing in custom development, programming, and business automation across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/",
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
    // Core Excel services
    "Excel consulting services",
    "Excel programmers Australia",
    "Excel VBA development",
    "Excel macro programming",
    "Excel automation solutions",

    // Feature specific
    "Excel dashboard development",
    "Excel data manipulation",
    "Excel formula experts",
    "Excel pivot table solutions",
    "Excel charting services",

    // Integration focused
    "Excel database integration",
    "Excel SharePoint connection",
    "Excel API integration",
    "Excel cloud solutions",
    "Excel SQL integration",

    // Business solutions
    "Excel business automation",
    "Excel reporting solutions",
    "Excel analytics tools",
    "Excel financial modeling",
    "Excel data analysis",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Experts Group | Microsoft Excel Consulting",
    description:
      "Professional Microsoft Excel consulting services specializing in custom development, programming, and business automation across Australia.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/services/microsoft-excel/",
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
