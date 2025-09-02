import React from "react";

export const metadata = {
  title: "Microsoft 365 API Integration Services | Office Experts Group",
  description:
    "Professional Microsoft 365 API integration services. Custom portals, apps, and add-ins using Microsoft Graph and Office.js APIs—secure, mobile-ready, and tailored to your workflows.",

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "Microsoft 365 API Integration Services | Office Experts Group",
    description:
      "Professional Microsoft 365 API integration services. Custom portals, apps, and add-ins using Microsoft Graph and Office.js APIs—secure, mobile-ready, and tailored to your workflows.",
    url: "https://www.officeexperts.com.au/microsoft-365-api-integration",
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
    // Core service keywords
    "microsoft 365 api integration",
  ],

  alternates: {
    canonical: "/microsoft-365-api-integration",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft 365 API Integration Services | Office Experts Group",
    description:
      "Professional Microsoft 365 API integration services. Custom portals, apps, and add-ins using Microsoft Graph and Office.js APIs—secure, mobile-ready, and tailored to your workflows.",
    images: ["/logo.png"],
  },
};

export default function Microsoft365ApiIntegrationLayout({ children }) {
  return <>{children}</>;
}
