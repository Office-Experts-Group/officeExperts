import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Cloud Based Solutions | Office Experts Group",
  description:
    "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Cloud Based Solutions | Office Experts Group",
    description:
      "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
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
  keywords: ["Microsoft cloud solutions with Azure"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Cloud Based Solutions | Office Experts Group",
    description:
      "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "/services/by-business-solution/cloud-based-solutions-with-azure",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
