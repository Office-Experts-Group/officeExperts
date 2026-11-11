// app/services/microsoft-publisher/layout.js
const PAGE_URL = "https://www.officeexperts.com.au/services/microsoft-publisher";
const PAGE_TITLE = "Microsoft Publisher Migration and .pub File Conversion";
const PAGE_DESCRIPTION =
  "Microsoft Publisher has retired. We convert your .pub files and rebuild newsletters, brochures and forms as branded Word and PowerPoint templates.";

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
    "Microsoft Publisher migration",
    "Microsoft Publisher retirement",
    "convert Publisher to Word",
    "convert pub to PDF",
    "open pub files",
    "Publisher file conversion",
    "Microsoft Publisher alternative",
    "Publisher templates in Word",
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
