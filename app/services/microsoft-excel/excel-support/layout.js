import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Help & Support | Office Experts Group",
  description:
    "Professional Excel training and support services across Australia. Get instant expert guidance via remote access or onsite with our experienced Excel consultants.",

  keywords: [
    // Core Excel support keywords
    "Excel one on one training",
    "Excel expert support",
  ],
  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
