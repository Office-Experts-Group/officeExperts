import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Melbourne | Office Experts Group",
  description:
    "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing. Specialists in custom development, databases, integration, and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Melbourne | Office Experts Group",
    description:
      "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing. Specialists in custom development, databases, integration, and business solutions.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-melbourne",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Excel experts Melbourne",
    "Access experts Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Experts Melbourne",
    description:
      "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
