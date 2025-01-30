import React from "react";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

const Footer = dynamic(() => import("./(components)/Footer"), {
  ssr: true, // We want this server rendered but loaded dynamically
});

const Copyright = dynamic(() => import("../components/Copyright"));
const ScrollBtn = dynamic(() => import("../components/ScrollBtn"), {
  ssr: false, // Client-side only as it depends on scroll
});

import "./global.css";
import ScrollIndicator from "../components/ScrollIndicator";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",

      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
});

export const metadata = {
  // Basic metadata
  title: "Microsoft Office Consulting & Solutions | Office Experts Group",
  description:
    "Leading Microsoft Office consulting and solutions provider in Australia. Specialising in comprehensive Office solutions, integration, and business automation.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Office Consulting & Solutions | Office Experts Group",
    description:
      "Leading Microsoft Office consulting and solutions provider in Australia. Specialising in comprehensive Office solutions, integration, and business automation.",
    url: "https://www.officeexperts.com.au/",
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

  // Additional metadata
  keywords: [
    // Core Office services
    "Microsoft Office consulting",
    "Microsoft Office solutions",
    "Microsoft Office programmers",
    "Microsoft Office Experts",
    "Office automation solutions",
    "Microsoft Office integration services",
    "Office 365 migration services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group | Microsoft Office Consulting & Solutions",
    description:
      "Leading Microsoft Office consulting and solutions provider in Australia. Specialising in comprehensive Office solutions, integration, and business automation.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
        <ScrollIndicator />
      </body>
    </html>
  );
}
