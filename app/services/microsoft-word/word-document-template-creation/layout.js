import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Document Template Creation | Office Experts Group",
  description:
    "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  // OpenGraph
  openGraph: {
    title: "Word Document Template Creation | Office Experts Group",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation",
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

  alternates: {
    canonical: "https://www.wordexperts.com.au/word-document-template-creation",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Word Template Creation | Word Document Creation | Office Experts Group",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
