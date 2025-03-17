import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Support and Training Northern Rivers, NSW | Office Experts Group",
  description:
    "Professional Microsoft support and training services in Northern Rivers, NSW. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Support and Training Northern Rivers, NSW | Office Experts Group",

    description:
      "Professional Microsoft support and training services in Northern Rivers, NSW. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",
    url: "https://www.officeexperts.com.au/microsoft-support-and-training-northern-rivers-nsw",
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
    // Location-based
    "Microsoft support Northern Rivers, NSW",
    "Microsoft training Northern Rivers, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Support and Training Northern Rivers, NSW | Office Experts Group",
    description:
      "Professional Microsoft support and training services in Northern Rivers, NSW. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-support-and-training-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
