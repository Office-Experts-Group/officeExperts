import React from "react";

export const metadata = {
  title: "Microsoft Office Consulting Northern Rivers NSW",
  description:
    "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW with over 25+ years of experience.",

  openGraph: {
    title: "Microsoft Office Consulting Northern Rivers NSW",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW with over 25+ years of experience.",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw",
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

  keywords: [
    // Location-specific
    "Microsoft Office consulting Northern Rivers NSW",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group Northern Rivers NSW",
    description:
      "Leading Microsoft Office consulting and solutions provider in Northern Rivers NSW with over 25+ years of experience.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/office-excel-access-and-365-experts-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
