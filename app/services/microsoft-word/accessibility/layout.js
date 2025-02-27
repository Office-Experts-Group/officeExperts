import React from "react";

export const metadata = {
  title: "Microsoft Word Accessibility Solutions | Office Experts Group",
  description:
    "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",

  keywords: [
    // Core accessibility services
    "Microsoft word accessibility solutions",
    "accessible document templates",
  ],

  alternates: {
    canonical: "/services/microsoft-word/accessibility",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/accessibility",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Accessibility Solutions | Office Experts Group",
    description:
      "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/accessibility",
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
    title: "Microsoft Word Accessibility Solutions | Office Experts Group",
    description:
      "Our team of Word design experts can deliver your document templates to the highest accessibility standards, setting your business up to efficiently and effectively produce quality, timely, consistent, and accessible documentation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
