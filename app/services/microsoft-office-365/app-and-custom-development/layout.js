import React from "react";

export const metadata = {
  // Basic metadata
  title: "Custom 365 Solutions | Office Experts Group",
  description:
    "Professional Microsoft 365 app development and custom solutions. Specialists in SharePoint integration, corporate intranet development and business automation.",

  // Additional metadata
  keywords: [
    // Core service keywords
    "Office 365 app development",
    // "custom SharePoint solutions",
    // "365 integration services",
    // "SharePoint list integration",
    // "corporate intranet development",

    // // Location-based
    // "365 developers Sydney",
    // "SharePoint specialists Melbourne",
    // "Office 365 consultants Brisbane",
    // "custom app developers Perth",

    // // Service-specific long tail
    // "SharePoint list automation",
    // "365 library integration",
    // "corporate branding SharePoint",
    // "custom 365 applications",
    // "SharePoint workflow automation",

    // // Industry-specific
    // "enterprise 365 solutions",
    // "corporate SharePoint development",
    // "business process automation 365",
    // "custom intranet solutions",

    // // Technology combinations
    // "SharePoint Office 365 integration",
    // "Microsoft 365 custom development",
    // "365 business automation",
    // "SharePoint business solutions",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-office-365/app-and-custom-development",
    languages: {
      "en-AU": "/services/microsoft-office-365/app-and-custom-development",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
