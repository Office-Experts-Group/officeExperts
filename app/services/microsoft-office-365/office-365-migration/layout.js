import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office 365 Migration | Office Experts Group",
  description:
    "Professional Office 365 migration services with no downtime or data loss. Expert migration of emails, files, and systems to Office 365.",

  keywords: [
    // Core migration services
    "Office 365 migration services",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/office-365-migration",
  },

  // OpenGraph
  openGraph: {
    title: "Office 365 Migration | Office Experts Group",
    description:
      "Professional Office 365 migration services with no downtime or data loss. Expert migration of emails, files, and systems to Office 365.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-migration",
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
    title: "Office 365 Migration | Office Experts Group",
    description:
      "Professional Office 365 migration services with no downtime or data loss. Expert migration of emails, files, and systems to Office 365.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
