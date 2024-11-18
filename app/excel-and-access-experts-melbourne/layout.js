import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Melbourne",
  description:
    "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing. Specialists in custom development, databases, integration, and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Melbourne",
    description:
      "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing. Specialists in custom development, databases, integration, and business solutions.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/",
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
    // Location-specific
    "Excel experts Melbourne",
    "Access experts Melbourne",
    "database consultants Melbourne",
    "Excel programmers Melbourne",
    "Access specialists Melbourne",

    // Service-specific
    "custom Excel development",
    "Access database solutions",
    "Excel database integration",
    "business automation Melbourne",
    "database development Melbourne",

    // Expertise areas
    "Excel VBA programming",
    "Access database design",
    "data manipulation services",
    "custom reporting solutions",
    "database consulting Melbourne",

    // Industry focus
    "business Excel solutions",
    "corporate database systems",
    "enterprise Excel development",
    "professional Excel services",
    "business database solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Experts Melbourne",
    description:
      "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/",
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
