import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Popup Form | Office Experts Group",
  description:
    "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",

  // OpenGraph
  openGraph: {
    title: "Word Popup Form | Office Experts Group",
    description:
      "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/popup-forms",
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
  keywords: ["Word popup form development"],

  alternates: {
    canonical: "/services/microsoft-word/popup-forms",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/popup-forms",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Popup Form | Office Experts Group",
    description:
      "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
