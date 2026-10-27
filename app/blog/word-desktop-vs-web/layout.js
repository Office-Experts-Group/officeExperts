import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Desktop vs Web: Do You Really Need to Pay for Microsoft 365?",
  description:
    "Discover the real differences between Word for Web and Desktop versions. Learn when the free version is enough and when it simply is not.",

  // OpenGraph
  openGraph: {
    title: "Word Desktop vs Web: Do You Really Need to Pay for Microsoft 365?",
    description:
      "Discover the real differences between Word for Web and Desktop versions. Learn when the free version is enough and when it simply is not.",
    url: "https://www.wordexperts.com.au/blog/word-desktop-vs-web",
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
  keywords: ["Word desktop vs web", ,],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Desktop vs Web: Do You Really Need to Pay for Microsoft 365?",
    description:
      "Discover the real differences between Word for Web and Desktop versions. Learn when the free version is enough and when it simply is not.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/word-desktop-vs-web",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
