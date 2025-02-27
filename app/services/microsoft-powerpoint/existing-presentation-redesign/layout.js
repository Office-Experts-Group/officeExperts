import React from "react";

export const metadata = {
  title: "PowerPoint Presentation Redesign Services | Office Experts Group",
  description:
    "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides and brand guidelines.",

  keywords: [
    // Core PowerPoint services
    "PowerPoint presentation redesign",
  ],

  alternates: {
    canonical: "/services/microsoft-powerpoint/existing-presentation-redesign",
  },

  // OpenGraph
  openGraph: {
    title: "PowerPoint Presentation Redesign Services | Office Experts Group",
    description:
      "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides and brand guidelines.",
    url: "https://officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
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
    title: "PowerPoint Presentation Redesign Services | Office Experts Group",
    description:
      "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides and brand guidelines.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
