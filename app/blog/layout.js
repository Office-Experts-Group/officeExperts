import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Experts Blog",
  description:
    "Explore in-depth tutorials, expert tips, and best practices for mastering advanced Microsoft software techniques, including Excel, Power BI, Power Pivot, and more. Learn how to streamline your workflow, analyze data effectively, and unlock the full potential of Microsoft's powerful tools.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Blog",
    description:
    "Explore in-depth tutorials, expert tips, and best practices for mastering advanced Microsoft software techniques, including Excel, Power BI, Power Pivot, and more. Learn how to streamline your workflow, analyze data effectively, and unlock the full potential of Microsoft's powerful tools.",
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
    "Explore in-depth tutorials, expert tips, and best practices for mastering advanced Microsoft software techniques, including Excel, Power BI, Power Pivot, and more. Learn how to streamline your workflow, analyze data effectively, and unlock the full potential of Microsoft's powerful tools.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}