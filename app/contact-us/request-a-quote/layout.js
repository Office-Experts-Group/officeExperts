import React from "react";

export const metadata = {
  title: "Request a Quote | Office Experts Group",
  description:
    "Request a quote for Microsoft Office consulting services and solutions from Office Experts Group.",
  keywords: ["Office experts request a quote"],
  openGraph: {
    title: "Request a Quote | Office Experts Group",
    description:
      "Request a quote for Microsoft Office consulting services and solutions from Office Experts Group.",
    url: "https://www.officeexperts.com.au/contact-us/request-a-quote",
  },

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote - Office Experts Group",
    description:
      "Request a quote for Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
