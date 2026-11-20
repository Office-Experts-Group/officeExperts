// /app/services/microsoft-access/is-access-right-for-your-company/layout.js
import React from "react";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company";
const PAGE_TITLE = "Is Access Right for Your Company? | Office Experts";
const PAGE_DESCRIPTION =
  "Not sure if Microsoft Access is right for your business? Our Australian Access experts review your data, users and systems and give you a straight answer.";
const PAGE_KEYWORDS = [
  "Custom Access database development",
  "Is Access right for my business",
  "Microsoft Access consultants Australia",
  "Access vs Excel",
  "Access vs SQL Server",
  "Access database assessment",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function IarcLayout({ children }) {
  return <>{children}</>;
}
