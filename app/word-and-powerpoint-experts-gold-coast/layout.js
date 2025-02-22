import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
  description:
    "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
    description:
      "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Gold Coast Word experts",
    "Gold Coast PowerPoint experts",
    // "Gold Coast Microsoft consultants",
    // "Gold Coast document designers",
    // "Gold Coast presentation specialists",

    // // Service-specific
    // "Microsoft Word templates Gold Coast",
    // "PowerPoint design services",
    // "document automation Gold Coast",
    // "presentation design Gold Coast",
    // "corporate template design",
    // "business document solutions",

    // // Specific services
    // "document accessibility services",
    // "presentation template design",
    // "corporate branding templates",
    // "business document automation",
    // "custom PowerPoint solutions",

    // // Industry combinations
    // "corporate document solutions Gold Coast",
    // "business presentation services",
    // "professional template design",
    // "document management Gold Coast",
    // "presentation consulting services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Gold Coast | Office Experts Group",
    description:
      "Leading Microsoft Word and PowerPoint consulting and solutions provider in Gold Coast. Specialising in templates, document design, presentation solutions, and business automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-and-powerpoint-experts-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
