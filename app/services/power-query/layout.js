import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Query | Office Experts Group",
  description:
    "Power Query experts helping businesses automate data imports, clean messy datasets and build reliable reporting workflows that save time.",

  keywords: ["Power Query"],

  alternates: {
    canonical: "/services/power-query",
  },

  // OpenGraph
  openGraph: {
    title: "Power Query | Office Experts Group",
    description:
      "Power Query experts helping businesses automate data imports, clean messy datasets and build reliable reporting workflows that save time.",
    url: "https://www.officeexperts.com.au/services/power-query",
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
    title: "Power Query | Office Experts Group",
    description:
      "Power Query experts helping businesses automate data imports, clean messy datasets and build reliable reporting workflows that save time.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
