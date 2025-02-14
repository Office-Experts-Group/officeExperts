import React from "react";

export const metadata = {
  // Basic metadata
  title: "Exchange Online Setup and Support | Office Experts Group",
  description:
    "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",

  keywords: [
    // Core Exchange/Email services
    "Microsoft Exchange Online setup",
    "Microsoft Exchange Online support",
  ],

  alternates: {
    canonical:
      "/services/microsoft-office-365/exchange-online-setup-and-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
