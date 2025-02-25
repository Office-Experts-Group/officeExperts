import React from "react";

export const metadata = {
  title: "Microsoft Office 365 Implementation Services | Office Experts Group",
  description:
    "Professional Office 365 implementation and migration services. Expert consultants for successful Office 365 deployment across your organisation.",

  keywords: [
    // Core implementation
    "Office 365 remote data gathering",
  ],

  alternates: {
    canonical:
      "/services/microsoft-office-365/remote-data-gathering-from-any-device",
  },

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Office 365 Remote Data Gathering Services | Office Experts Group",
    description:
      "Professional Office 365 remote data gathering services. Expert consultants for successful Office 365 deployment across your organisation.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device",
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
      "Microsoft Office 365 Implementation Services | Office Experts Group",
    description:
      "Professional Office 365 implementation and migration services. Expert consultants for successful Office 365 deployment across your organisation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
