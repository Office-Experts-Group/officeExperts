import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Upgrades And Migration | Office Experts Group",
  description:
    "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",

  keywords: ["microsoft office upgrades and migration"],

  alternates: {
    canonical: "/services/microsoft-office/upgrades-and-migration",
  },

  // OpenGraph
  openGraph: {
    title: "Office Upgrades And Migration | Office Experts Group",
    description:
      "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",
    url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
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
    title: "Office Upgrades And Migration | Office Experts Group",
    description:
      "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300102810",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
