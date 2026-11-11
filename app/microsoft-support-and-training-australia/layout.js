// app/microsoft-support-and-training-australia/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-support-and-training-australia";
const PAGE_TITLE = "Microsoft Support and Training Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Microsoft support and training services across Australia. Our local experts provide customised training, technical support and troubleshooting.";

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
    "Microsoft support Australia",
    "Microsoft training Australia",
    "Microsoft consultants Australia",
    "Microsoft Office training Australia",
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
