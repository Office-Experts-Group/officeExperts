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
  },

  // Additional metadata
  keywords: ["Word popup form development"],
  alternates: {
    canonical: "https://www.wordexperts.com.au/popup-forms",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
