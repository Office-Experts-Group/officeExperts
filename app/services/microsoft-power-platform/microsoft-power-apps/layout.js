import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Apps Services Australia | Office Experts Group",
  description:
    "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",

  // Additional metadata
  keywords: [
    // Core services
    "Microsoft power apps development",
    // "custom business apps",
    // "canvas apps development",
    // "model driven apps",
    // "power apps consulting",

    // // Location-based
    // "power apps services australia",
    // "power apps consulting sydney",
    // "power apps developers melbourne",
    // "power apps solutions brisbane",

    // // Service-specific long tail
    // "mobile business apps development",
    // "power apps integration services",
    // "custom power fx development",
    // "power apps data source connection",
    // "power apps business automation",

    // // Industry-specific
    // "enterprise power apps solutions",
    // "healthcare power apps development",
    // "sales team mobile apps",
    // "field service power apps",

    // // Technology combinations
    // "power platform integration",
    // "dataverse power apps",
    // "power apps sharepoint integration",
    // "power apps azure solutions",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-apps",
    languages: {
      "en-AU": "/services/microsoft-power-platform/microsoft-power-apps",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
