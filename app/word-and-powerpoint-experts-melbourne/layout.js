import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Melbourne",
  description:
    "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Melbourne",
    description:
      "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne",
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
    // Location-specific
    "word experts melbourne",
    "powerpoint experts melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Melbourne",
    description:
      "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-and-powerpoint-experts-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
