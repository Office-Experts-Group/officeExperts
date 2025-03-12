import React from "react";

export const metadata = {
  // Basic metadata
  title: "Companies and Organisations | Office Experts Group",
  description:
    "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",

  keywords: ["word template designers"],

  alternates: {
    canonical: "/services/microsoft-word/companies-and-organisations",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/companies-and-organisations",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Companies and Organisations | Office Experts Group",
    description:
      "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/companies-and-organisations",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Companies and Organisations | Office Experts Group",
    description:
      "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
