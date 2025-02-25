import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft .NET Services | C# | VB.net | VSTO | Office Experts Group",
  description:
    "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",

  keywords: [
    // Core .NET services
    "NET developers",
  ],

  alternates: {
    canonical: "/services/microsoft-dot-net",
  },

  // OpenGraph
  openGraph: {
    title:
      "Microsoft .NET Services | C# | VB.net | VSTO | Office Experts Group",
    description:
      "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-dot-net",
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
      "Microsoft .NET Services | C# | VB.net | VSTO | Office Experts Group",
    description:
      "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
