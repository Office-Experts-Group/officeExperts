import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Dashboard Experts",
  description:
    "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",

  // OpenGraph
  openGraph: {
    title: "Dashboard Experts",
    description:
      "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",
    url: "https://www.officeexperts.com.au/services/by-business-solution/dashboards/",
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
    // Core dashboard services
    "dashboard experts",
    "excel dashboard services",
    "power bi dashboard development",
    "business intelligence dashboards",
    "custom dashboard solutions",

    // Location-based
    "dashboard experts australia",
    "excel dashboard consultants sydney",
    "power bi consultants melbourne",
    "dashboard development brisbane",
    "bi dashboard specialists perth",

    // Service-specific long tail
    "real-time business dashboard development",
    "interactive excel dashboard creation",
    "power bi dashboard consulting",
    "corporate dashboard solutions",
    "data visualization experts",
    "kpi dashboard development",
    "business metrics dashboard",
    "visual analytics solutions",

    // Technology combinations
    "excel powerbi dashboard integration",
    "microsoft dashboard solutions",
    "cloud dashboard development",
    "enterprise dashboard systems",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Dashboard Experts",
    description:
      "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/dashboards/",
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
