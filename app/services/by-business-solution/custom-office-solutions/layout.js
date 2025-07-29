import React from "react";

export const metadata = {
  // Basic metadata
  title: "Custom Office Solutions",
  description:
    "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 102 810",

  // Additional metadata
  keywords: [
    // Core custom solution services
    "custom Microsoft Office solutions Australia",
  ],
  alternates: {
    canonical: "/services/by-business-solution/custom-office-solutions",
  },

  // OpenGraph
  openGraph: {
    title: "Custom Office Solutions",
    description:
      "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 102 810",
    url: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
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
    title: "Custom Office Solutions",
    description:
      "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 102 810",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
