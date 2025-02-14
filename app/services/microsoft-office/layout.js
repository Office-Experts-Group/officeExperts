import React from "react";

export const metadata = {
  title: "Microsoft Office Services | Office Experts Group",
  description:
    "The Office Experts Group specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",

  openGraph: {
    title: "Microsoft Office Services | Office Experts Group",
    description:
      "The Office Experts Group specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services/microsoft-office",
  },

  keywords: [
    // Core services
    // "microsoft office development services australia",
    "custom Microsoft office solutions development",
  ],
  alternates: {
    canonical: "/services/microsoft-office",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
