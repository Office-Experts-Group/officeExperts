// /app/blog/file-attachments-in-power-apps/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/file-attachments-in-power-apps";
const PAGE_TITLE = "File Attachments in Power Apps: Best Way | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to upload multiple files from Power Apps straight into a SharePoint document library using the Power Apps V2 trigger in Power Automate.";
const PAGE_KEYWORDS = ["File Attachments in Power Apps"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm this exists in the OE /public folder
const OG_IMAGE_ALT = "Office Experts Group logo";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
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
  alternates: { canonical: PAGE_URL },
};

export default function FileAttachmentsBlogLayout({ children }) {
  return <>{children}</>;
}
