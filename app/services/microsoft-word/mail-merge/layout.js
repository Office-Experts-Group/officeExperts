// /services/microsoft-word/mail-merge/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/mail-merge";
const PAGE_TITLE = "Mail Merge Services for Word, Excel and Outlook";
const PAGE_DESCRIPTION =
  "Mail merge set-up, automation and repair. Personalised letters, invoices, labels and emails from Excel, Access or Outlook data.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["mail merge services"],
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
