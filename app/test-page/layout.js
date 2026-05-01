// app/services/microsoft-office/upgrades-and-migration/layout.js

import React from "react";

export const metadata = {
  // ── Primary metadata ─────────────────────
  title:
    "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
  description:
    "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",

  keywords: ["Microsoft Office upgrades", "Microsoft migration services"],

  // ── Canonical ────────────────────────────
  alternates: {
    canonical: "/services/microsoft-office/upgrades-and-migration",
  },

  // ── OpenGraph ────────────────────────────
  openGraph: {
    title:
      "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
    description:
      "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",
    url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group — Microsoft Office Upgrades & Migration",
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
      "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
    description:
      "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",
    images: ["/logo.png"],
  },
};

export default function UpgradesMigrationLayout({ children }) {
  return <>{children}</>;
}
