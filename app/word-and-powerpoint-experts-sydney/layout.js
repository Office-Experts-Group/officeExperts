import React from "react";

export const metadata = {
  title: "Word and PowerPoint Experts Sydney | Office Experts Group",
  description:
    "Sydney's leading Microsoft Word and PowerPoint consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",

  openGraph: {
    title: "Word and PowerPoint Experts Sydney | Office Experts Group",
    description:
      "Sydney's leading Microsoft Word and PowerPoint consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",
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
    "powerpoint designers sydney",
  ],

  alternates: {
    canonical: "/word-and-powerpoint-experts-sydney",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Canberra | Office Experts Group",
    description:
      "Our team of Microsoft Word and PowerPoint experts in Canberra deliver comprehensive document and presentation solutions with a focus on efficiency, customer service, and innovative solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
