// /components/ConversionTracking.jsx
import Script from "next/script";

// Always-on conversion hooks. Replaces the scripts that used to live inside
// CookieConsent. It only pushes events to the GTM dataLayer, so the Google
// Ads and GA4 tags themselves are configured inside GTM (see hand-over notes).
//
// Events pushed:
//   ads_conversion       window.gtag_report_conversion(url), e.g. phone links
//   contact_form_submit  contact form success message appeared
export default function ConversionTracking({ nonce }) {
  return (
    <Script id="conversion-tracking" strategy="afterInteractive" nonce={nonce}>
      {`
(function () {
  if (window.__oeConversionTracking) return;
  window.__oeConversionTracking = true;

  window.dataLayer = window.dataLayer || [];

  // Kept so any existing onClick="return gtag_report_conversion(url)" still works.
  window.gtag_report_conversion = function (url) {
    var done = false;
    var go = function () {
      if (done) return;
      done = true;
      if (typeof url !== "undefined") window.location = url;
    };
    try {
      window.dataLayer.push({
        event: "ads_conversion",
        eventCallback: go,
        eventTimeout: 1000
      });
      // Never trap the visitor if GTM is slow or blocked.
      setTimeout(go, 1000);
    } catch (e) {
      go();
    }
    return false;
  };

  // Contact form: watch for the success message after the submit button is clicked.
  // Attribute selectors survive CSS-module hash changes.
  document.addEventListener("click", function (e) {
    if (!e.target.closest('[class*="contact_submitBtn"]')) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (document.querySelector('[class*="contact_successMessage"]')) {
        clearInterval(timer);
        window.dataLayer.push({
          event: "contact_form_submit",
          form_type: "contact",
          page_location: window.location.href
        });
      } else if (tries >= 60) {
        clearInterval(timer);
      }
    }, 500);
  });
})();
      `}
    </Script>
  );
}
