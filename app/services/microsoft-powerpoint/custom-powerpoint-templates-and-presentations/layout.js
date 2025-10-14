import React from "react";

export const metadata = {
  title: "Custom PowerPoint Templates and Presentations",
  description:
    "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
  keywords: ["custom PowerPoint template designers"],

  alternates: {
    canonical:
      "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
  },

  // OpenGraph
  openGraph: {
    title: "Custom PowerPoint Templates and Presentations",
    description:
      "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
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
    title:
      "Custom PowerPoint Templates and Presentations | Office Experts Group",
    description:
      "Professional PowerPoint template design services with Master Slides that meet your brand guidelines and maintain consistency across corporate presentations.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
