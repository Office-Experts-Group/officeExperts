import React from "react";

export const metadata = {
  title: "Business Process Automation | Office Experts Group",
  description:
    "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",

  keywords: [
    // Core automation keywords
    "business automation office 365",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/business-process-automation",
  },

  // OpenGraph
  openGraph: {
    title: "Business Process Automation | Office Experts Group",
    description:
      "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation",
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
    title: "Business Process Automation | Office Experts Group",
    description:
      "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
