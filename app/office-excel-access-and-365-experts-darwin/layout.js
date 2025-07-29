import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Experts Darwin",
  description:
    "Leading Microsoft Office consulting services in Darwin. Specialising in Microsoft solutions, integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Darwin",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specialising in Microsoft solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin",
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

  // Keywords extrapolated from content
  keywords: [
    // Core services
    "Microsoft Office consultants Darwin",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Darwin",
    description:
      "Leading Microsoft Office consulting services in Darwin. Specialising in Microsoft solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/office-excel-access-and-365-experts-darwin",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
