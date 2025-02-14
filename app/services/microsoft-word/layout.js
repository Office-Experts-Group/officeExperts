import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Services | Office Experts Group",
  description:
    "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Services | Office Experts Group",
    description:
      "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-word",
  },

  // Additional metadata
  keywords: [
    // Core Word services
    "Microsoft Word professional consultants",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
