import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Fields and Repeating Data in Word: Best Practices for Business Templates",
  description:
    "Learn how to use Word's fields to transform static templates into dynamic, error-resistant tools. Master REF fields, document properties, and content controls to eliminate manual data entry and reduce costly errors.",

  // OpenGraph
  openGraph: {
    title:
      "Fields and Repeating Data in Word: Best Practices for Business Templates",
    description:
      "Learn how to use Word's fields to transform static templates into dynamic, error-resistant tools. Master REF fields, document properties, and content controls to eliminate manual data entry and reduce costly errors.",
    url: "https://www.wordexperts.com.au/blog/fields-and-repeating-data-in-word",
    siteName: "Word Experts",
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
  keywords: ["fields and repeating data"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Fields and Repeating Data in Word: Best Practices for Business Templates",
    description:
      "Learn how to use Word's fields to transform static templates into dynamic, error-resistant tools. Master REF fields, document properties, and content controls to eliminate manual data entry and reduce costly errors.",
    images: ["/logo.png"],
  },

  alternates: {
    alternate: [
      {
        url: "https://www.wordexperts.com.au/blog/fields-and-repeating-data-in-word",
      },
    ],
    canonical: "/blog/fields-and-repeating-data-in-word",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
