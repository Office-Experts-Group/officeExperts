import React from "react";

export const metadata = {
  url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation",
  title: "Microsoft Office 365 Implementation | Office Experts Group",
  description:
    "Microsoft offers an overwhelming choice of apps and  subscriptions. Our experts are ready to consult with you to find the best choice for you.",
  keywords: [
    // Core Office 365 services
    "Office 365 implementation",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/office-365-implementation",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Office 365 Implementation | Office Experts Group",
    description:
      "Microsoft offers an overwhelming choice of apps and  subscriptions. Our experts are ready to consult with you to find the best choice for you.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-implementation",
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
    title: "Microsoft Office 365 Implementation | Office Experts Group",
    description:
      "Microsoft offers an overwhelming choice of apps and  subscriptions. Our experts are ready to consult with you to find the best choice for you.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
