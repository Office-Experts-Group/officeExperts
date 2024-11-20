import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word Accessibility Solutions | Microsoft Word Accessibility",
  description:
    "As Excel specialists, our Word accessibility solutions seamlessly integrate with your Excel-based workflows. Our experts ensure your documents maintain accessibility standards while working harmoniously with your Excel data exports and reporting processes.",

  openGraph: {
    title: "Word Accessibility Solutions | Microsoft Word Accessibility",
    description:
      "As Excel specialists, our Word accessibility solutions seamlessly integrate with your Excel-based workflows. Our experts ensure your documents maintain accessibility standards while working harmoniously with your Excel data exports and reporting processes.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility/",
    siteName: "Excel Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core accessibility services with Excel focus
    "excel to word accessibility",
    "microsoft word excel integration",
    "accessible excel reports",
    "excel data accessibility",
    "accessible reporting templates",

    // Location-based with Excel focus
    "excel accessibility consultants sydney",
    "excel document services melbourne",
    "excel reporting specialists brisbane",
    "excel integration experts perth",

    // Service-specific long tail with Excel emphasis
    "excel to word conversion accessibility",
    "accessible excel reporting",
    "integrated template design",
    "WCAG compliant excel exports",
    "spreadsheet accessibility standards",

    // Industry-specific with Excel focus
    "financial document accessibility",
    "data reporting accessibility",
    "spreadsheet accessibility services",
    "excel integration services",

    // Technology combinations
    "microsoft excel word integration",
    "excel template accessibility",
    "spreadsheet accessibility automation",
    "excel reporting standards",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Accessibility Solutions | Microsoft Word Accessibility",
    description:
      "As Excel specialists, our Word accessibility solutions seamlessly integrate with your Excel-based workflows. Our experts ensure your documents maintain accessibility standards while working harmoniously with your Excel data exports and reporting processes.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/accessibility/",
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
