import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Online Solutions | Power Pages, SharePoint & Custom Web Apps",
  description:
    "Custom online solutions using Microsoft 365, SharePoint, Power Platform and modern Web Development Frameworks to streamline your business.",

  keywords: [
    // Core online services
    "custom online solutions",
  ],

  alternates: {
    canonical: "/services/by-business-solution/online-solutions",
  },

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Online Solutions | Power Pages, SharePoint & Custom Web Apps",
    description:
      "Custom online solutions using Microsoft 365, SharePoint, Power Platform and modern Web Development Frameworks to streamline your business.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Online Solutions | Power Pages, SharePoint & Custom Web Apps",
    description:
      "Custom online solutions using Microsoft 365, SharePoint, Power Platform and modern Web Development Frameworks to streamline your business.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
