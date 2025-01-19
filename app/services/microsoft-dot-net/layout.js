import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft .NET Services | C# | VB.net | VSTO | Office Experts Group",
  description:
    "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",

  keywords: [
    // Core .NET services
    "NET developers",
    // "C# programming Australia",
    // "VB.NET development",
    // "VSTO solutions",
    // "ASP.NET web development",

    // // Location-based
    // "NET developers Sydney",
    // "NET consultants Melbourne",
    // "NET programmers Brisbane",
    // "NET specialists Perth",

    // // Service-specific long tail
    // "custom NET application development",
    // "NET business solutions",
    // "NET API development",
    // "NET migration services",
    // "NET troubleshooting services",

    // // Industry-specific
    // "enterprise NET solutions",
    // "corporate NET development",
    // "government NET services",
    // "business NET applications",

    // // Technology combinations
    // "NET Azure integration",
    // "NET cloud solutions",
    // "NET Office integration",
    // "NET SharePoint development",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-access/microsoft-dot-net",
    languages: {
      "en-AU": "/services/microsoft-access/microsoft-dot-net",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
