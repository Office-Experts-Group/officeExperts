// app/test-page/layout.js
// Design review copy of the new home page. Kept out of search results with
// noindex until it replaces app/page.js. When it goes live, move this metadata
// into the home page layout, set PAGE_URL to the site root and remove robots.
const PAGE_URL = "https://www.officeexperts.com.au/test-page";
const PAGE_TITLE =
  "Microsoft Consultants and Developers Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Australian Microsoft consultants since 2000. Our team builds, fixes and supports the Word, Excel, Access, Power Platform and AI solutions your business relies on.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "microsoft consultants australia",
    "microsoft developers",
    "office experts",
  ],
  // Test page only: remove when this becomes the home page
  robots: { index: false, follow: false },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
