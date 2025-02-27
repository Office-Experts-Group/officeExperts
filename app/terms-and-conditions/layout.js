import React from "react";

export const metadata = {
  title: "Terms and Conditions - Office Experts Group",
  description:
    "Read our terms and conditions for using Office Experts. We ensure fair and transparent practices for all users.",

  alternates: {
    canonical: "/terms-and-conditions",
  },

  // OpenGraph
  openGraph: {
    title: "Terms and Conditions - Office Experts Group",
    description:
      "Read our terms and conditions for using Office Experts. We ensure fair and transparent practices for all users.",
    url: "https://www.officeexperts.com.au/terms-and-conditions",
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
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
