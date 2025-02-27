import React from "react";

export const metadata = {
  title: "Online Access Database Solutions | Office Experts Group",
  description:
    "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",

  keywords: [
    // Core service keywords
    "online access database solutions",
  ],

  alternates: {
    canonical: "/services/microsoft-access/access-online",
    alternate: [
      {
        url: "https://www.accessexperts.com.au/access-online",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Online Access Database Solutions | Office Experts Group",
    description:
      "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",
    url: "https://www.accessexperts.com.au/access-online",
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
    title: "Online Access Database Solutions | Office Experts Group",
    description:
      "Innovative online Microsoft Access database solutions with cloud integration, including Office 365 and SharePoint compatibility. Cost-effective development with comprehensive mobile support.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
