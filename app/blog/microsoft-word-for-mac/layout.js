import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Word for Mac: What You Need to Know About Features and Limitations",
  description:
    "Discover the real differences between Word for Mac and Windows. Learn about missing features, VBA limitations, workarounds, and whether Word for Mac is right for you.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Word for Mac: What You Need to Know About Features and Limitations",
    description:
      "Discover the real differences between Word for Mac and Windows. Learn about missing features, VBA limitations, workarounds, and whether Word for Mac is right for you.",
    url: "https://www.wordexperts.com.au/blog/microsoft-word-for-mac",
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
  keywords: ["Word for Mac"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title:
      "Microsoft Word for Mac: What You Need to Know About Features and Limitations",
    description:
      "Discover the real differences between Word for Mac and Windows. Learn about missing features, VBA limitations, workarounds, and whether Word for Mac is right for you.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/microsoft-word-for-mac",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
