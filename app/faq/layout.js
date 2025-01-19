import React from "react";

export const metadata = {
  title: "Frequently Asked Questions | Office Experts Group",
  description:
    "Common questions about our Microsoft Office consulting services, including Excel, Word, PowerPoint, Access, and Office 365 solutions.",

  openGraph: {
    title: "Frequently Asked Questions | Office Experts Group",
    description:
      "Find answers to common questions about our Microsoft Office consulting services and solutions.",
    url: "https://www.officeexperts.com.au/faq/",
  },

  keywords: [
    // Service FAQ keywords
    "Office consulting FAQ",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/faq",
    languages: {
      "en-AU": "/faq",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
