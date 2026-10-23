import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Video Tutorials | Word Experts Australia",
  description:
    "Watch expert video tutorials on Microsoft Word. Learn document automation, template creation, VBA programming, and advanced Word techniques from Australia's leading Word specialists.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Video Tutorials | Word Experts Australia",
    description:
      "Watch expert video tutorials on Microsoft Word. Learn document automation, template creation, VBA programming, and advanced Word techniques from Australia's leading Word specialists.",
    url: "https://www.wordexperts.com.au/video-portal",
    siteName: "Word Experts Australia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Australia Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["Word video tutorials"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Microsoft Word Video Tutorials | Word Experts Australia",
    description:
      "Watch expert video tutorials on Microsoft Word. Learn document automation, template creation, VBA programming, and advanced Word techniques.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/video-portal",
  },

  // Favicon/icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.wordexperts.com.au"
      : "http://localhost:3000"
  ),
};

export default function VideoPortalLayout({ children }) {
  return <>{children}</>;
}
