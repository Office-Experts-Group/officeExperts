import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Consultants Canberra",
  description:
    "Our team of experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency & customer service.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Consultants Canberra",
    description:
      "Our team of experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency & customer service.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-canberra",
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

  // Additional metadata
  keywords: [
    // Location-specific
    "Canberra Word experts",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Canberra",
    description:
      "Our team of experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency & customer service.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-and-powerpoint-experts-canberra",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
