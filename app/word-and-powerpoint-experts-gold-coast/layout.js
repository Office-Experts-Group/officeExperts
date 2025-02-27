import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
  description:
    "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
    description:
      "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast",
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
    "Gold Coast Word experts",
    "Gold Coast PowerPoint experts",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
    description:
      "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-and-powerpoint-experts-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
