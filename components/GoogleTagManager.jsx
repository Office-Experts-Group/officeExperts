// /components/GoogleTagManager.jsx
import Script from "next/script";

// Google Tag Manager container for Office Experts.
// Loads on every page, independent of the cookie banner.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PGD2FFPK";

// Goes anywhere in the layout. Both scripts are async and injected after
// hydration, so they never block rendering. The nonce satisfies the CSP
// script-src-elem 'nonce-...' directive.
export default function GoogleTagManager({ nonce }) {
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive" nonce={nonce}>
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });`}
      </Script>
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
    </>
  );
}

// Must sit directly after the opening <body> tag (GTM's noscript fallback).
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
