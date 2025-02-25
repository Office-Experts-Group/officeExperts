import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office 365 Services | Office Experts Group",
  description:
    "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",

  keywords: [
    // Core Office 365 services
    "Microsoft Office 365 Consultants",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Office 365 Services | Office Experts Group",
    description:
      "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365",
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
    title: "Microsoft Office 365 Services | Office Experts Group",
    description:
      "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
