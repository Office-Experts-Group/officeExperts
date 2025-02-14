import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Office 365 Services | Office Experts Group",
  description:
    "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",

  keywords: [
    // Core Office 365 services
    "Microsoft Office 365 Consultants",
  ],

  alternates: {
    canonical: "/services/microsoft-office-365",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
