import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Fill In Forms | Office Experts Group",
  description:
    "Expert Word form design services Specialising in user-friendly data entry solutions, form controls, and VBA integration. Professional form templates with consistent formatting.",

  // OpenGraph
  openGraph: {
    title: "Word Fill In Forms & Form Design Services",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms",
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

  // Additional metadata
  keywords: [
    // Core form services
    "Word fill inform designers",
  ],

  alternates: {
    canonical: "/services/microsoft-word/fill-in-forms",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/fill-in-forms",
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
