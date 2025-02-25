import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Business Solutions & Custom Office Development Services | Office Experts Group",
  description:
    "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Business Solutions & Custom Office Development Services | Office Experts Group",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    url: "https://www.officeexperts.com.au/services/by-business-solution",
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
    // Core business solutions
    "microsoft office business solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Business Solutions & Custom Office Development Services | Office Experts Group",
    description:
      "Expert Microsoft Office development and consulting services including VBA macros, database solutions, cloud integration, and custom Office solutions. Contact us for business solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/by-business-solution",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
