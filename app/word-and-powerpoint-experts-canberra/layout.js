import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Canberra | Office Experts Group",
  description:
    "Our team of Microsoft Word and PowerPoint experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency, customer service, and innovative solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Canberra | Office Experts Group",
    description:
      "Our team of Microsoft Word and PowerPoint experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency, customer service, and innovative solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-canberra",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Canberra Word experts",
    "Canberra PowerPoint experts",
    // "Microsoft Office consultants Canberra",
    // "document design Canberra",
    // "presentation design Canberra",

    // // Service-specific
    // "Word template design",
    // "PowerPoint presentation services",
    // "document automation",
    // "corporate templates",
    // "accessibility solutions",

    // // Industry-specific
    // "government document solutions",
    // "corporate presentation design",
    // "business document templates",
    // "professional PowerPoint design",
    // "document consulting services",

    // // Technology combinations
    // "Microsoft Word solutions",
    // "PowerPoint automation",
    // "Office 365 integration",
    // "document accessibility",
    // "template development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Canberra | Office Experts Group",
    description:
      "Our team of Microsoft Word and PowerPoint experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency, customer service, and innovative solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-canberra",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
