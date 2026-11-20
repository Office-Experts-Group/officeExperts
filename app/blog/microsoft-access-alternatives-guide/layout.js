// /app/blog/microsoft-access-alternatives-guide/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/microsoft-access-alternatives-guide";
const PAGE_TITLE = "Microsoft Access Alternatives 2026 | Office Experts";
const PAGE_DESCRIPTION =
  "Thinking of replacing Microsoft Access? Compare SQL Server, Azure and Power Apps, and see when keeping your Access front-end is the smarter move.";
const PAGE_KEYWORDS = ["microsoft access alternatives"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  authors: [{ name: "Daniel Thomas" }],
  alternates: { canonical: PAGE_URL },
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
        alt: "Office Experts logo",
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
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
