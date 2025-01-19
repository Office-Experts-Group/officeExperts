import React from "react";

export const metadata = {
  title: "Contact Us | Office Experts Group",
  description:
    "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today at consult@officeexperts.com.au",

  openGraph: {
    title: "Contact Us | Office Experts Group",
    description:
      "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today at consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/contact-us/",
  },

  keywords: ["Office experts contact"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Contact Us | Office Experts Group",
    description:
      "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/contact-us",
    languages: {
      "en-AU": "/contact-us",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
