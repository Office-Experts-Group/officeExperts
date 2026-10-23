import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Consultants Locations",
  description:
    "Microsoft Word consulting services available across Australia. Remote support and on-site consultants in all major cities.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Consultants Locations",
    description:
      "Microsoft Word consulting services available across Australia. Remote support and on-site consultants in all major cities.",
    url: "https://www.wordexperts.com.au/locations",
    siteName: "Word Experts",
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
    // Location-based
    "Microsoft Word consultant locations Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Microsoft Word Consultants Locations | Office Experts Group",
    description:
      "Microsoft Word consulting services available across Australia. Remote support and on-site consultants in all major cities.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/locations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
