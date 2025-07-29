import React from "react";

export const metadata = {
  // Basic metadata
  title: "Looking for a job? | Office Experts Group",
  description:
    "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies.",

  // OpenGraph
  openGraph: {
    title: "Looking for a job? | Office Experts Group",
    description:
      "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies.",
    url: "https://www.officeexperts.com.au/looking-for-a-job",
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
    // Core services
    "Microsoft Office jobs",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Looking for a job?",
    description:
      "Are you skilled in Microsoft technologies? We are looking for talented Australian consultants proficient in developing solutions with Microsoft technologies.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/looking-for-a-job",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
