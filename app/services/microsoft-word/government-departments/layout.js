import React from "react";

export const metadata = {
  title: "Government Department Word Solutions | Office Experts Group",
  description:
    "Expert Microsoft Word document design and consulting services for government departments. Specialising in accessible documents, templates, and corporate identity protection for state and federal agencies.",

  openGraph: {
    title: "Government Department Word Solutions | Office Experts Group",
    description:
      "Expert Microsoft Word document design and consulting services for government departments. Specialising in accessible documents, templates, and corporate identity protection for state and federal agencies.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/government-departments",
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
    // Core government services
    "government microsoft document solutions",
  ],

  alternates: {
    canonical: "/services/microsoft-word/government-departments",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/government-departments",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Government Department Word Solutions | Office Experts Group",
    description:
      "Expert Microsoft Word document design and consulting services for government departments. Specialising in accessible documents, templates, and corporate identity protection for state and federal agencies.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
