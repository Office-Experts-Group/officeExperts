import React from "react";

export const metadata = {
  title: "Business Process Automation | Office Experts Group",
  description:
    "Transform your business processes with Office 365 automation. We help eliminate paper forms and streamline workflows with automated business solutions.",

  keywords: [
    // Core automation keywords
    "business automation office 365",
    // "office 365 process automation",
    // "office 365 workflow automation",
    // "automated form processing",
    // "paperless office automation",

    // // Solution specific
    // "office 365 forms automation",
    // "digital form conversion",
    // "automated business workflows",
    // "office 365 business processes",
    // "electronic form solutions",

    // // Business outcomes
    // "business process efficiency",
    // "workflow streamlining",
    // "automated data collection",
    // "business report automation",
    // "process optimization office 365",

    // // Industry specific
    // "enterprise process automation",
    // "corporate workflow solutions",
    // "business automation consulting",
    // "office automation services",
    // "digital transformation solutions",
  ],

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-office-365/business-process-automation",
    languages: {
      "en-AU": "/services/microsoft-office-365/business-process-automation",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
