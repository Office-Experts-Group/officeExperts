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
    // "PowerPoint help Australia",
    // "PowerPoint guidance services",
    // "PowerPoint expert training",

    // // Location-based
    // "PowerPoint training Sydney",
    // "PowerPoint assistance Melbourne",
    // "PowerPoint help Brisbane",
    // "PowerPoint training Perth",

    // // Service-specific long tail
    // "corporate PowerPoint training",
    // "professional PowerPoint guidance",
    // "PowerPoint presentation training",
    // "PowerPoint template assistance",
    // "PowerPoint design help",

    // // Industry-specific
    // "business PowerPoint training",
    // "corporate PowerPoint assistance",
    // "enterprise PowerPoint help",
    // "professional PowerPoint guidance",

    // // Training combinations
    // "PowerPoint design training",
    // "PowerPoint template guidance",
    // "PowerPoint creation assistance",
    // "PowerPoint skills development",
  ],
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
