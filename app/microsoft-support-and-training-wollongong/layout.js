import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Support and Training Wollongong | Office Experts Group",
  description:
    "Professional Microsoft support and training services in Wollongong. Our experts provide customised training, technical support and troubleshooting.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Support and Training Wollongong | Office Experts Group",
    description:
      "Professional Microsoft support and training services in Wollongong. Our experts provide customised training, technical support and troubleshooting.",
    url: "https://www.officeexperts.com.au/microsoft-support-and-training-wollongong",
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
    "Microsoft support Wollongong",
    "Microsoft training Wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Support and Training Wollongong | Office Experts Group",
    description:
      "Professional Microsoft support and training services in Wollongong. Our experts provide customised training, technical support and troubleshooting.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-support-and-training-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
