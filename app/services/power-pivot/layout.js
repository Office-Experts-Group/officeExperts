import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Pivot | Office Experts Group",
  description:
    "",

  keywords: [
    "Power Pivot",
  ],

  alternates: {
    canonical: "/services/power-pivot",
  },

  // OpenGraph
  openGraph: {
    title: "Power Pivot | Office Experts Group",
    description:
      "",
    url: "https://www.officeexperts.com.au/services/power-pivot",
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
    title: "Power Pivot | Office Experts Group",
    description:
      "",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
