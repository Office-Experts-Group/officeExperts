import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Custom Design and Development | Office Experts Group",
  description:
    "Professional Excel custom design and development services across Australia. Specialising in custom workbooks, VBA development, and Excel integration solutions.",

  keywords: [
    // Core service keywords
    "Excel custom design and development",
  ],

  alternates: {
    canonical: "/services/microsoft-excel/custom-design-and-development",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/custom-design-and-development",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Excel Custom Design and Development | Office Experts Group",
    description:
      "Professional Excel custom design and development services across Australia. Specialising in custom workbooks, VBA development, and Excel integration solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development",
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
    title: "Excel Custom Design and Development | Office Experts Group",
    description:
      "Professional Excel custom design and development services across Australia. Specialising in custom workbooks, VBA development, and Excel integration solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
