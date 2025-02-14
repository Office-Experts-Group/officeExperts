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
  ],

  alternates: {
    canonical: "/services/microsoft-office-365/app-and-custom-development",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
