// app/services/cloud-backup-with-onedrive/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/cloud-backup-with-onedrive";
const PAGE_TITLE = "OneDrive Cloud Backup & Recovery for Businesses";
const PAGE_DESCRIPTION =
  "OneDrive setup, Microsoft 365 Backup, migration and file recovery for Australian businesses. Protect files from deletion, ransomware and staff turnover.";

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
    "OneDrive cloud backup",
    "OneDrive backup for business",
    "Microsoft 365 Backup",
    "OneDrive migration",
    "OneDrive Known Folder Move",
    "unlicensed OneDrive accounts",
  ],
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
