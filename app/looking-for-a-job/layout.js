import React from "react";

export const metadata = {
  // Basic metadata
  title: "Looking for a job? | Office Experts Group",
  description:
    "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies including Microsoft Office, Power Platform, and Azure as independent contractors.",

  // OpenGraph
  openGraph: {
    title: "Looking for a job? | Office Experts Group",
    description:
      "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies including Microsoft Office, Power Platform, and Azure as independent contractors.",
    url: "https://www.officeexperts.com.au/looking-for-a-job/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Microsoft Office jobs",
    // "Microsoft consultant positions",
    // "Office development jobs",
    // "Microsoft contractor work",

    // // Technology-specific
    // "Microsoft Power Platform jobs",
    // "Azure development positions",
    // "Office 365 consultant work",
    // "Microsoft technology careers",

    // // Location-based
    // "Microsoft jobs Australia",
    // "Remote Microsoft work",
    // "Australian IT contractors",
    // "Work from home IT jobs",

    // // Role-specific
    // "Independent IT contractor",
    // "Microsoft solutions developer",
    // "Technical consultant position",
    // "Microsoft programming jobs",

    // // Skills-based
    // "Microsoft development skills",
    // "Office automation expertise",
    // "Microsoft consulting experience",
    // "Technical solution provider",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Looking for a job?",
    description:
      "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies including Microsoft Office, Power Platform, and Azure as independent contractors.",
    images: ["/logo.png"],
  },

  // Additional tags

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/looking-for-a-job",
    languages: {
      "en-AU": "/looking-for-a-job",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
