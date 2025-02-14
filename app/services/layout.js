import React from "react";

export const metadata = {
  title: "Microsoft Development Services | Office Experts Group",
  description:
    "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",

  openGraph: {
    title: "Microsoft Development Services | Office Experts Group",
    description:
      "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services",
  },

  keywords: [
    // Core services
    "microsoft office development services australia",
  ],
  alternates: {
    canonical: "https://www.officeexperts.com.au/services",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
