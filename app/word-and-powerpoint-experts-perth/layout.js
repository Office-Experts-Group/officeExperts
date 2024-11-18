import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word and PowerPoint Experts Perth",
  description:
    "Leading Microsoft Word and PowerPoint consulting services in Perth. Specializing in presentation design, document templates, and business automation solutions.",

  openGraph: {
    title: "Word and PowerPoint Experts Perth",
    description:
      "Leading Microsoft Word and PowerPoint consulting services in Perth. Specializing in presentation design, document templates, and business automation solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
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
    "Microsoft PowerPoint designers Perth",
    "Microsoft Word designers Perth",
    "Word presentation templates Perth",
    "PowerPoint customization Perth",
    "Microsoft Office consultants Perth",
    "Document design services Perth",
    "PowerPoint automation Perth",
    "Word template solutions Perth",
    "Microsoft Office Perth",
    "Professional presentations Perth",
    "Document automation Perth",
    "Corporate templates Perth",
    "Business documents Perth",
    "PowerPoint experts Perth",
    "Word consultants Perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Perth",
    description:
      "Leading Microsoft Word and PowerPoint consulting services in Perth. Specializing in presentation design, document templates, and business automation solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
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
