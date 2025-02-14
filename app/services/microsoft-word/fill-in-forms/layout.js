import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Fill In Forms | Office Experts Group",
  description:
    "Expert Word form design services Specialising in user-friendly data entry solutions, form controls, and VBA integration. Professional form templates with consistent formatting.",

  // OpenGraph
  openGraph: {
    title: "Word Fill In Forms & Form Design Services",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms",
  },

  // Additional metadata
  keywords: [
    // Core form services
    "Word fill inform designers",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/fill-in-forms",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
