// app/locations/layout.js
const PAGE_URL = "https://www.officeexperts.com.au/locations";
const PAGE_TITLE = "Microsoft Consultants Australia | Office Experts Group Locations";
const PAGE_DESCRIPTION =
  "Microsoft Office consulting services available across Australia. Remote support and on-site consultants in all major cities.";

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
    "Microsoft Office consultant locations Australia",
    "Microsoft consultants Australia",
    "remote Microsoft consultants",
    "on-site Microsoft consultants",
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
