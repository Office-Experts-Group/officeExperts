import React from "react";

export const metadata = {
  title: "Terms and Conditions - Office Experts Group",
  description:
    "Read our terms and conditions for using Office Experts. We ensure fair and transparent practices for all users.",

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/terms-and-conditions/",
    languages: {
      "en-AU": "/terms-and-conditions/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
