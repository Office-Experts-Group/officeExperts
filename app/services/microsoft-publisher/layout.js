import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Publisher Services | Office Experts Group",
  description:
    "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",

  keywords: [
    // Core Publisher services
    "Microsoft Publisher templates",
    "Microsoft Publisher design services",
    // "Publisher consulting",
    // "corporate publishing solutions",
    // "professional layout design",

    // // Location-based
    // "Publisher experts Australia",
    // "Publisher consultants Sydney",
    // "Publisher design Melbourne",
    // "Publisher services Brisbane",

    // // Service-specific long tail
    // "corporate branding templates",
    // "Publisher document migration",
    // "Publisher format conversion",
    // "custom Publisher layouts",
    // "Publisher template development",

    // // Industry-specific
    // "business publishing solutions",
    // "corporate identity design",
    // "enterprise publishing services",
    // "professional document templates",

    // // Feature combinations
    // "Publisher accessibility solutions",
    // "Publisher corporate styles",
    // "Publisher online documents",
    // "Publisher training services",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-publisher",
    languages: {
      "en-AU": "/services/microsoft-publisher",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
