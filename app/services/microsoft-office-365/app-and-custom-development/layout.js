import React from "react";

export const metadata = {
  // Basic metadata
  title: "Custom 365 Solutions | Office Experts Group",
  description:
    "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",

  // Additional metadata
  keywords: [
    // Core service keywords
    "Office 365 app development",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/app-and-custom-development",
  },

  // OpenGraph
  openGraph: {
    title: "Custom 365 Solutions | Office Experts Group",
    description:
      "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/app-and-custom-development",
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
    title: "Custom 365 Solutions | Office Experts Group",
    description:
      "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
