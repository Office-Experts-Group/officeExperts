import React from "react";

export const metadata = {
  title: "Microsoft Excel Consulting | Office Experts Group",
  description:
    "Our Microsoft Excel programming services can enhance your productivity. Contact our expert Excel specialists to help your business excel.",

  keywords: [
    // "Excel macro programming",
    // Core Excel services
    "Excel consulting services",
    "Excel programmers Australia",
  ],

  alternates: {
    canonical: "https://www.excelexperts.com.au",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Consulting | Office Experts Group",
    description:
      "Our Microsoft Excel programming services can enhance your productivity. Contact our expert Excel specialists to help your business excel.",
    url: "https://www.excelexperts.com.au",
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
    title: "Microsoft Excel Consulting | Office Experts Group",
    description:
      "Our Microsoft Excel programming services can enhance your productivity. Contact our expert Excel specialists to help your business excel.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
