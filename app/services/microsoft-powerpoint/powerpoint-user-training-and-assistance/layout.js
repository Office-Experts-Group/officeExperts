import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "PowerPoint Training | PowerPoint Assistance | PowerPoint Help | PowerPoint Experts",
  description:
    "Expert PowerPoint training and assistance services. Get professional guidance on creating effective presentations with our PowerPoint specialists.",

  // OpenGraph
  openGraph: {
    title: "PowerPoint Training & Assistance Services",
    description:
      "Professional PowerPoint training and assistance services. Get expert guidance on creating effective presentations from our PowerPoint specialists.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
    siteName: "Office Experts Group",
    images: [
      {
        url: "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Keywords extrapolated from content
  keywords: [
    // Core training services
    "PowerPoint training services",
    "PowerPoint user assistance",
    "PowerPoint help Australia",
    "PowerPoint guidance services",
    "PowerPoint expert training",

    // Location-based
    "PowerPoint training Sydney",
    "PowerPoint assistance Melbourne",
    "PowerPoint help Brisbane",
    "PowerPoint training Perth",

    // Service-specific long tail
    "corporate PowerPoint training",
    "professional PowerPoint guidance",
    "PowerPoint presentation training",
    "PowerPoint template assistance",
    "PowerPoint design help",

    // Industry-specific
    "business PowerPoint training",
    "corporate PowerPoint assistance",
    "enterprise PowerPoint help",
    "professional PowerPoint guidance",

    // Training combinations
    "PowerPoint design training",
    "PowerPoint template guidance",
    "PowerPoint creation assistance",
    "PowerPoint skills development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint Training & Assistance Services",
    description:
      "Professional PowerPoint training and assistance services. Get expert guidance on creating effective presentations from our PowerPoint specialists.",
    images: [
      "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
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
