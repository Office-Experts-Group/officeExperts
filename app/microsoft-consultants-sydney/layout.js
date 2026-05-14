// app/microsoft-consultants-sydney/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Consultants Sydney | Office Experts Group Australia",
  description:
    "Microsoft Office specialists operating nationally since 2000. Office Experts Group has local consultants in Sydney delivering expert solutions across the entire Microsoft suite.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Consultants Sydney | Office Experts Group Australia",
    description:
      "Microsoft Office specialists operating nationally since 2000. Office Experts Group has local consultants in Sydney delivering expert solutions across the entire Microsoft suite.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-sydney",
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

  // Keywords
  keywords: ["Microsoft consultants Sydney"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Sydney | Office Experts Group Australia",
    description:
      "Microsoft Office specialists operating nationally since 2000. Office Experts Group has local consultants in Sydney delivering expert solutions across the entire Microsoft suite.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-sydney",
  },
};

export default function SydneyLayout({ children }) {
  return <>{children}</>;
}
