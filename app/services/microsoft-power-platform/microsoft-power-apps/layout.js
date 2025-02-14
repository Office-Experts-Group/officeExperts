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
  ],
  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
