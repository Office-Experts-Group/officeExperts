// app/microsoft-consultants-perth/layout.js
import React from "react";

export const metadata = {
  title: "Microsoft Consultants Perth | Office Experts Group",
  description:
    "Australia's leading Microsoft consultants with a local Perth team. For over 25 years we have provided software solutions across the entire Microsoft suite. Contact us for a free consultation.",

  openGraph: {
    title: "Microsoft Consultants Perth | Office Experts Group",
    description:
      "Australia's leading Microsoft consultants with a local Perth team. For over 25 years we have provided software solutions across the entire Microsoft suite. Contact us for a free consultation.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-perth",
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

  keywords: ["Microsoft consultants Perth"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Perth | Office Experts Group",
    description:
      "Australia's leading Microsoft consultants with a local Perth team. For over 25 years we have provided software solutions across the entire Microsoft suite. Contact us for a free consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-perth",
  },
};

export default function PerthLayout({ children }) {
  return <>{children}</>;
}
