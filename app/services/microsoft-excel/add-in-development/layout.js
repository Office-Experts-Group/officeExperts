import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Add-in Development | Excel Add-ins | Office Expert Australia",
  description:
    "Expert Excel add-in development services for extending Excel functionality. Specializing in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",

  openGraph: {
    title: "Excel Add-in Development Services",
    description:
      "Expert Excel add-in development services for extending Excel functionality. Specializing in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
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
    "Excel add-in development",
    "VBA add-in programming",
    "VSTO add-in development",
    "custom Excel functions",
    "Excel automation add-ins",
    "Excel toolbar customization",
    "Excel VBA macros",
    "Excel VSTO solutions",
    "Excel add-in deployment",
    "Excel functionality extension",
    "corporate Excel add-ins",
    "enterprise Excel solutions",
    "Excel automation tools",
    "Excel development services",
    "custom Excel features",
    "Excel .NET development",
    "Excel business automation",
    "Excel add-in consulting",
    "Excel integration services",
    "Excel workplace automation",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Add-in Development Services",
    description:
      "Expert Excel add-in development services for extending Excel functionality. Specializing in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
  robots: {
    index: true,
    follow: true,
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
