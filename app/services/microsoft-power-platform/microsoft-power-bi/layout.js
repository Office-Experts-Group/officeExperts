import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Power BI Services",
  description:
    "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",

  openGraph: {
    title: "Power BI Services",
    description:
      "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core Power BI services
    "Power BI consulting",
    "Power BI services Australia",
    "Power BI development",
    "Power BI integration",
    "Power BI dashboard creation",

    // Location-based
    "Power BI consultants Sydney",
    "Power BI solutions Melbourne",
    "Power BI consultants Brisbane",
    "Power BI specialists Perth",

    // Service-specific long tail
    "custom Power BI dashboards",
    "Power BI data visualization",
    "Power BI report development",
    "Power BI business analytics",
    "Power BI template solutions",

    // Industry-specific
    "corporate Power BI solutions",
    "enterprise Power BI consulting",
    "business Power BI analytics",
    "financial Power BI reporting",

    // Technology combinations
    "Power BI Azure integration",
    "Power BI database connection",
    "Power BI Excel integration",
    "Power BI business intelligence",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformE1",
    title: "Power BI Services",
    description:
      "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
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
