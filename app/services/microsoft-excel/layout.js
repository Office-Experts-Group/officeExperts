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
    // "Excel VBA development",
    // "Excel automation solutions",

    // // Feature specific
    // "Excel dashboard development",
    // "Excel data manipulation",
    // "Excel formula experts",
    // "Excel pivot table solutions",
    // "Excel charting services",

    // // Integration focused
    // "Excel database integration",
    // "Excel SharePoint connection",
    // "Excel API integration",
    // "Excel cloud solutions",
    // "Excel SQL integration",

    // // Business solutions
    // "Excel business automation",
    // "Excel reporting solutions",
    // "Excel analytics tools",
    // "Excel financial modeling",
    // "Excel data analysis",
  ],

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-excel",
    languages: {
      "en-AU": "/services/microsoft-excel",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
