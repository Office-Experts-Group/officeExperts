import React from "react";

export const metadata = {
  title: "Microsoft Word Training | Office Experts Group",
  description:
    "Our team of Word design experts are available to resolve your issues with Microsoft Word documents and templates. Whenever you need help, our Word experts accept small and large jobs at competitive rates.",

  openGraph: {
    title: "Microsoft Word Training | Office Experts Group",
    description:
      "Our team of Word design experts are available to resolve your issues with Microsoft Word documents and templates. Whenever you need help, our Word experts accept small and large jobs at competitive rates.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/training",
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

  keywords: [
    // Core training services
    "Microsoft Word remote support",
  ],

  alternates: {
    canonical: "/services/microsoft-word/training",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/training",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Fill In Forms & Form Design Services | Office Experts Group",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
