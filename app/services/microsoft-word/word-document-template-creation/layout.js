import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Word Template Creation | Word Document Creation | Office Experts Group",
  description:
    "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  // OpenGraph
  openGraph: {
    title:
      "Word Template Creation | Word Document Creation | Office Experts Group",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation",
  },

  // Additional metadata
  keywords: ["Custom word template designers"],
  alternates: {
    canonical: "https://www.wordexperts.com.au/word-document-template-creation",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
