import React from "react";

const DESCRIPTION =
  "Expert business process automation using the entire Microsoft Suite and AI Agents. 25+ years of experience building software solutions.";

export const metadata = {
  // ── Primary metadata ─────────────────────
  title:
    "Business Process Automation & AI Integration | Office Experts Australia",
  description: DESCRIPTION,

  keywords: ["microsoft process automation australia"],

  // ── Canonical ────────────────────────────
  alternates: {
    canonical: "/services/business-process-automation",
  },

  // ── OpenGraph ────────────────────────────
  openGraph: {
    title:
      "Business Process Automation & AI Integration | Office Experts Australia",
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/services/business-process-automation",
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
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function BPALayout({ children }) {
  return <>{children}</>;
}
