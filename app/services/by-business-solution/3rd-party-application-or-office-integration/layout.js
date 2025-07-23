import React from "react";

export const metadata = {
  // Basic metadata
  title: "3rd Party Application | Office Experts Group",
  description:
    "Custom Office add-ins for Word, PowerPoint, Outlook and more. Our developers create seamless solutions that work across your entire Microsoft Office ecosystem. Get expert advice today!",

  keywords: [
    // Core integration services
    "office 3rd party integration services",
  ],
  alternates: {
    canonical:
      "/services/by-business-solution/3rd-party-application-or-office-integration",
  },

  // OpenGraph
  openGraph: {
    title: "3rd Party Application | Office Experts Group",
    description:
    "Custom Office add-ins for Word, PowerPoint, Outlook and more. Our developers create seamless solutions that work across your entire Microsoft Office ecosystem. Get expert advice today!",
    url: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
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
    title: "3rd Party Application | Office Experts Group",
    description:
    "Custom Office add-ins for Word, PowerPoint, Outlook and more. Our developers create seamless solutions that work across your entire Microsoft Office ecosystem. Get expert advice today!",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
