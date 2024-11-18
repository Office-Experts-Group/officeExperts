import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Contact Us | Microsoft Excel | Microsoft Access | Power BI | MS Office",
  description:
    "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",

  openGraph: {
    title: "Contact Us | Office Experts Group",
    description:
      "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/contact-us/",
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

  keywords: [
    "Microsoft Office consultants",
    "Office experts contact",
    "Microsoft consulting Australia",
    "Office solutions contact",
    "Power Platform experts",
    "Excel consultants",
    "Access database experts",
    "Word consultants Australia",
    "PowerPoint specialists",
    "Office 365 migration experts",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Contact Us | Office Experts Group",
    description:
      "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/contact-us/",
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
