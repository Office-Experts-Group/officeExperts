import React from "react";

export const metadata = {
  // Basic metadata
  title: "Exchange Online Setup and Support",
  description:
    "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",

  keywords: [
    // Core Exchange/Email services
    "Microsoft Exchange Online setup",
    "Microsoft Exchange Online support",
  ],

  alternates: {
    canonical:
      "/services/microsoft-office-365/exchange-online-setup-and-support",
  },

  // OpenGraph
  openGraph: {
    title: "Exchange Online Setup and Support",
    description:
      "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support",
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
    title: "Exchange Online Setup and Support | Office Experts Group",
    description:
      "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
