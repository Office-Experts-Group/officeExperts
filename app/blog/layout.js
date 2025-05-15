import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Experts Blog",
  description:
    "Explore tutorials, tips, and best practices for Microsoft advanced Microsoft software techniques.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Blog",
    description:
    "Explore tutorials, tips, and best practices for Microsoft advanced Microsoft software techniques.",
    url: "https://www.officeexperts.com.au/blog",
    siteName: "Office Experts",
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
    "Office Experts Blog",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Blog",
    description:
    "Explore tutorials, tips, and best practices for Microsoft advanced Microsoft software techniques.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}