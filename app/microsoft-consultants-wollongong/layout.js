// app/microsoft-consultants-wollongong/layout.js
import React from "react";

// Page URL, title and description are shared with page.js (schema)
import { PAGE_URL, TITLE, DESCRIPTION } from "./(data)/wollongongMeta";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
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
  keywords: ["Microsoft consultants Wollongong"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-wollongong",
  },
};

export default function WollongongLayout({ children }) {
  return <>{children}</>;
}
