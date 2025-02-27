import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Formulas and Custom Formulas | Office Experts Group",
  description:
    "Expert assistance with Excel formulas and custom formula development. Our specialists help optimise formula usage and create custom solutions for complex requirements.",

  keywords: [
    // Core formula keywords
    "Excel formula help",
  ],

  alternates: {
    canonical: "/services/microsoft-excel/excel-formulas-and-custom-formulas",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Excel Formulas and Custom Formulas | Office Experts Group",
    description:
      "Expert assistance with Excel formulas and custom formula development. Our specialists help optimise formula usage and create custom solutions for complex requirements.",
    url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
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
    title: "Excel Formulas and Custom Formulas | Office Experts Group",
    description:
      "Expert assistance with Excel formulas and custom formula development. Our specialists help optimise formula usage and create custom solutions for complex requirements.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
