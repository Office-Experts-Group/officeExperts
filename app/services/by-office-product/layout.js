import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Product Services |  Office Experts Group",
  description:
    "Comprehensive Microsoft Office consultancy and assistance services across Australia. Specialising in Excel, Word, Access, PowerPoint, and SharePoint solutions.",

  keywords: [
    // Core services
    "Microsoft Office consultancy",
  ],

  alternates: {
    canonical: "/services/by-office-product",
  },

  // OpenGraph
  openGraph: {
    title: "Office Product Services |  Office Experts Group",
    description:
      "Comprehensive Microsoft Office consultancy and assistance services across Australia. Specialising in Excel, Word, Access, PowerPoint, and SharePoint solutions.",
    url: "https://www.officeexperts.com.au/services/by-office-product",
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
    title: "Office Product Services |  Office Experts Group",
    description:
      "Comprehensive Microsoft Office consultancy and assistance services across Australia. Specialising in Excel, Word, Access, PowerPoint, and SharePoint solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
