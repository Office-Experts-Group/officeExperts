import React from "react";

export const metadata = {
  // Basic metadata
  title: "VBScript Support | Office Experts Group",
  description:
    "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks.",

  keywords: [
    // Core VBScript services
    "VBScript programming",
  ],

  alternates: {
    canonical: "/services/microsoft-vbscript",
  },

  // OpenGraph
  openGraph: {
    title: "VBScript Support | Office Experts Group",
    description:
      "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks.",
    url: "https://www.officeexperts.com.au/services/microsoft-vbscript",
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
    title: "VBScript Support | Office Experts Group",
    description:
      "Our VBScript programmers are experienced across all VBScript needs including Windows automation, batch processing, and system tasks.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
