import React from "react";

export const metadata = {
  title: "Office, Excel, Access and 365 Consultants Perth",
  description:
    "Our Consultants in Perth specialise in custom development. Professionals in databases, custom coding, document design, dashboards and reporting solutions.",

  openGraph: {
    title: "Office, Excel, Access and 365 Consultants Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specialising in Excel, Access, and Office 365 solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth",
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
    // Perth-specific
    "Office 365 consultants Perth",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office, Excel, Access and 365 Experts - Perth",
    description:
      "Leading Microsoft Office consulting and solutions provider in Perth. Specialising in Excel, Access, and Office 365 solutions, integration, and business automation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/office-excel-access-and-365-experts-perth",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
