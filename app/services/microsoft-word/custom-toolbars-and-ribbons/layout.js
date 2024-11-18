import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word Toolbar Customization | Custom Word Ribbon Design | Custom Toolbar Development",
  description:
    "Expert customization of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",

  openGraph: {
    title: "Custom Word Toolbars & Ribbons Development Services",
    description:
      "Expert customization of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
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
    "word toolbar customization",
    "custom word ribbon design",
    "microsoft word toolbar development",
    "word ribbon automation",
    "custom toolbar services",

    // Specific features
    "word document automation",
    "custom word buttons",
    "word interface customization",
    "word toolbar programming",
    "word ribbon modification",

    // Business benefits
    "business document automation",
    "document workflow optimization",
    "document creation efficiency",
    "document productivity tools",
    "automated document elements",

    // Location-specific
    "word toolbar services australia",
    "word customization sydney",
    "document automation melbourne",
    "word ribbon experts brisbane",
    "custom word solutions perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom Word Toolbars & Ribbons Development Services",
    description:
      "Expert customization of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
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
