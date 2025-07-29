import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Support and Training Gold Coast | Office Experts Group",
  description:
    "Professional Microsoft support and training services in Gold Coast. Our local experts provide customised training, technical support and troubleshooting.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Support and Training Gold Coast | Office Experts Group",

    description:
      "Professional Microsoft support and training services in Gold Coast. Our local experts provide customised training, technical support and troubleshooting.",
    url: "https://www.officeexperts.com.au/microsoft-support-and-training-gold-coast",
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
    "Microsoft support Gold Coast",
    "Microsoft training Gold Coast",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Support and Training Gold Coast | Office Experts Group",
    description:
      "Professional Microsoft support and training services in Gold Coast. Our local experts provide customised training, technical support and troubleshooting.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-support-and-training-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
