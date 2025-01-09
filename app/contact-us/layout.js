import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Contact Us | Microsoft Excel | Microsoft Access | Power BI | MS Office",
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

  alternates: {
    canonical: "https://www.officeexperts.com.au/contact-us/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
