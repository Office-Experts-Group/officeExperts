// app/services/microsoft-office-365/copilot/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft 365 Copilot Consulting & Integration | Office Experts Group",
  description:
    "Expert Microsoft 365 Copilot consulting, deployment and training for Australian businesses. We help your team get real value from Copilot without the Ai Hype.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft 365 Copilot Consulting & Integration | Office Experts Group",
    description:
      "Expert Microsoft 365 Copilot consulting, deployment and training for Australian businesses. We help your team get real value from Copilot without the Ai Hype.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/copilot",
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

  // Keywords
  keywords: ["Microsoft 365 Copilot"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft 365 Copilot Consulting & Integration | Office Experts Group",
    description:
      "Expert Microsoft 365 Copilot consulting, deployment and training for Australian businesses. We help your team get real value from Copilot without the Ai Hype.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/services/microsoft-office-365/copilot",
  },
};

export default function CopilotLayout({ children }) {
  return <>{children}</>;
}
