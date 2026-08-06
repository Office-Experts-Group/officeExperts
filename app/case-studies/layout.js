// app/case-studies/layout.js

import React from "react";

export const metadata = {
  // Basic metadata
  title: "Case Studies | Office Experts Group",
  description:
    "Real case studies from Australian businesses we've helped with Microsoft Excel, Access, Power Platform and custom Office solutions. See the results for yourself.",

  // OpenGraph
  openGraph: {
    title: "Case Studies | Office Experts Group",
    description:
      "Real case studies from Australian businesses we've helped with Microsoft Excel, Access, Power Platform and custom Office solutions. See the results for yourself.",
    url: "https://www.officeexperts.com.au/case-studies",
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

  // Keywords
  keywords: ["Microsoft Office consulting case studies"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Case Studies | Office Experts Group",
    description:
      "Real case studies from Australian businesses we've helped with Microsoft Excel, Access, Power Platform and custom Office solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesLayout({ children }) {
  return <>{children}</>;
}
