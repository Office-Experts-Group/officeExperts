import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Support and Training Adelaide | Office Experts Group",
  description:
    "Professional Microsoft support and training services in Adelaide. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Support and Training Adelaide | Office Experts Group",

    description:
      "Professional Microsoft support and training services in Adelaide. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",
    url: "https://www.officeexperts.com.au/microsoft-support-and-training-adelaide",
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
    "Microsoft support Adelaide",
    "Microsoft training Adelaide",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Support and Training Adelaide | Office Experts Group",
    description:
      "Professional Microsoft support and training services in Adelaide. Our local experts provide customised training, technical support and troubleshooting for all Microsoft applications.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-support-and-training-adelaide",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
