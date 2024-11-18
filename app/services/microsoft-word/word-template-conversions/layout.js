import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word Design Services | Word Template Designers | Word Design Company",
  description:
    "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  openGraph: {
    title: "Word Template Conversions | Word Design Services",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions/",
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
    // Core services
    "Word template design",
    "Word template conversion",
    "Word document design",
    "Adobe to Word conversion",
    "InDesign to Word conversion",

    // Service-specific
    "Word template services",
    "Word document templates",
    "Word template solutions",
    "professional Word templates",
    "corporate Word templates",

    // Location-based
    "Word template designers Australia",
    "Word design services Sydney",
    "Word template conversion Melbourne",
    "Word document experts Brisbane",

    // Business focus
    "business Word templates",
    "corporate document templates",
    "professional document design",
    "template branding services",
    "Word document solutions",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Template Conversions | Word Design Services",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions/",

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
