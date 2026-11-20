// /app/blog/microsoft-access-on-mac/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js

const PAGE_URL =
  "https://www.officeexperts.com.au/blog/microsoft-access-on-mac";
const PAGE_TITLE = "Microsoft Access on Mac: 5 Solutions | Office Experts";
const PAGE_DESCRIPTION =
  "Discover practical solutions for running Microsoft Access on Mac. Compare Parallels, cloud hosting, Boot Camp, file viewers, and migration alternatives.";
const PAGE_KEYWORDS = ["Microsoft Access on Mac"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in the OE /public folder

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,

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
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  alternates: {
    canonical: PAGE_URL,
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
