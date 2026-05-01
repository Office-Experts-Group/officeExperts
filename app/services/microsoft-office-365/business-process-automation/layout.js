import React from "react";

export const metadata = {
  // ── Primary metadata ─────────────────────
  title:
    "Business Process Automation & AI Integration | Office Experts Australia",
  description:
    "Expert business process automation using the entire Microsoft Suite. From Power Platform, 365 and custom web applications. Our 25+ consultants will save you time and money.",

  keywords: ["microsoft process automation australia"],

  // ── Canonical ────────────────────────────
  alternates: {
    canonical: "/services/microsoft-office-365/business-process-automation",
  },

  // ── OpenGraph ────────────────────────────
  openGraph: {
    title:
      "Business Process Automation & AI Integration | Office Experts Australia",
    description:
      "Expert business process automation using the entire Microsoft Suite. From Power Platform, 365 and custom web applications. Our 25+ consultants will save you time and money.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group — Business Process Automation",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // ── Twitter / X Card ─────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Business Process Automation & AI Integration | Office Experts Australia",
    description:
      "Expert business process automation using the entire Microsoft Suite. From Power Platform, 365 and custom web applications. Our 25+ consultants will save you time and money.",
    images: ["/logo.png"],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function BPALayout({ children }) {
  return <>{children}</>;
}
