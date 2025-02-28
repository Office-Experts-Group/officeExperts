import React from "react";

export const metadata = {
  // Basic metadata
  title: "PowerPoint Training | PowerPoint Assistance | Office Experts Group",
  description:
    "Expert PowerPoint training and assistance services. Get professional guidance on creating effective presentations with our PowerPoint specialists.",

  keywords: [
    // Core training services
    "PowerPoint training services",
    "PowerPoint user assistance",
  ],

  alternates: {
    canonical:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
  },

  // OpenGraph
  openGraph: {
    title: "PowerPoint Training | PowerPoint Assistance | Office Experts Group",
    description:
      "Expert PowerPoint training and assistance services. Get professional guidance on creating effective presentations with our PowerPoint specialists.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
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
    title: "PowerPoint Training | PowerPoint Assistance | Office Experts Group",
    description:
      "Expert PowerPoint training and assistance services. Get professional guidance on creating effective presentations with our PowerPoint specialists.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
