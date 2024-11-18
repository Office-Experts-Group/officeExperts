import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft .NET Services | C# | VB.net | VSTO",
  description:
    "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft .NET Services | C# | VB.net | VSTO",
    description:
      "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-dot-net/",
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

  // Additional metadata
  keywords: [
    // Core .NET services
    "NET development services",
    "C# programming Australia",
    "VB.NET development",
    "VSTO solutions",
    "ASP.NET web development",

    // Location-based
    "NET developers Sydney",
    "NET consultants Melbourne",
    "NET programmers Brisbane",
    "NET specialists Perth",

    // Service-specific long tail
    "custom NET application development",
    "NET business solutions",
    "NET API development",
    "NET migration services",
    "NET troubleshooting services",

    // Industry-specific
    "enterprise NET solutions",
    "corporate NET development",
    "government NET services",
    "business NET applications",

    // Technology combinations
    "NET Azure integration",
    "NET cloud solutions",
    "NET Office integration",
    "NET SharePoint development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft .NET Services | C# | VB.net | VSTO",
    description:
      "Our .NET developers are highly experienced across the .NET platform, providing expert C#, VB.NET, and VSTO development services across Australia.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical: "https://www.officeexperts.com.au/services/microsoft-dot-net/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
