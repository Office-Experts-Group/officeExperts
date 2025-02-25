import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Services | Office Experts Group",
  description:
    "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Services | Office Experts Group",
    description:
      "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-word",
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
    // Core Word services
    "Microsoft Word professional consultants",
  ],

  alternates: {
    canonical: "https://www.wordexperts.com.au",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Services | Office Experts Group",
    description:
      "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
