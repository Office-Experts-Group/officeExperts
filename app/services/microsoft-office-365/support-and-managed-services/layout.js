import React from "react";

export const metadata = {
  title: "Office 365 Support and Managed Services | Office Experts Group",
  description:
    "Expert Office 365 managed services and support to help your business focus on core operations while we handle the technical aspects of Office 365.",

  keywords: [
    "Microsoft Office 365 managed services",
    "Microsoft Office 365 support",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/support-and-managed-services",
  },

  // OpenGraph
  openGraph: {
    title: "Office 365 Support and Managed Services | Office Experts Group",
    description:
      "Expert Office 365 managed services and support to help your business focus on core operations while we handle the technical aspects of Office 365.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/support-and-managed-services",
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
    title: "Office 365 Support and Managed Services | Office Experts Group",
    description:
      "Expert Office 365 managed services and support to help your business focus on core operations while we handle the technical aspects of Office 365.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
