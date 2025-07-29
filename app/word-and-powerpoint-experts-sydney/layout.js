import React from "react";

export const metadata = {
  title: "Word and PowerPoint Consultants Sydney",
  description:
    "Sydney's leading consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",

  openGraph: {
    title: "Word and PowerPoint Consultants Sydney",
    description:
      "Sydney's leading consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney",
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

  keywords: [
    // Location-based
    "word powerpoint experts sydney",
  ],

  alternates: {
    canonical: "/word-and-powerpoint-experts-sydney",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Consultants Sydney",
    description:
      "Sydney's leading consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
