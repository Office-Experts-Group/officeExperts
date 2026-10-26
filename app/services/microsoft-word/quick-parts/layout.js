// /services/microsoft-word/quick-parts/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/quick-parts";
const PAGE_TITLE = "Microsoft Word Quick Parts & Building Blocks Services";
const PAGE_DESCRIPTION =
  "Custom Microsoft Word Quick Parts and Building Blocks galleries, built into your templates so your team inserts approved, on-brand content in one click.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["Microsoft Word quick parts"],
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
