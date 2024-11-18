import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Request a Quote",
  description:
    "Use the form below to provide us with all relevant information to quickly and efficiently process your enquiry.",

  openGraph: {
    title: "Request a Quote",
    description:
      "Request a quote for Microsoft Office consulting services and solutions from Office Experts Group.",
    url: "https://www.officeexperts.com.au/contact-us/request-a-quote/",
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

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote - Office Experts Group",
    description:
      "Request a quote for Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/contact-us/request-a-quote/",
  robots: {
    index: true,
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
