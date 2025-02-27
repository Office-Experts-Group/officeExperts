// app/privacy/layout.js
import React from "react";

export const metadata = {
  title: "Privacy Policy | Office Experts Group",
  description:
    "Read the privacy policy for Office Experts, detailing how we collect, use, and protect your personal information.",
  url: "https://www.officeexperts.com.au/privacy-policy",
  keywords: "Office experts privacy policy",

  alternates: {
    canonical: "/privacy-policy",
  },

  // OpenGraph
  openGraph: {
    title: "Privacy Policy | Office Experts Group",
    description:
      "Read the privacy policy for Office Experts, detailing how we collect, use, and protect your personal information.",
    url: "https://www.officeexperts.com.au/privacy-policy",
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
};

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}
