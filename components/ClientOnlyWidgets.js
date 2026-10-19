"use client";
import dynamic from "next/dynamic";

const CookieConsent = dynamic(() => import("./CookieConsent"), { ssr: false });
const ScrollBtn = dynamic(() => import("./ScrollBtn"), { ssr: false });

export default function ClientOnlyWidgets() {
  return (
    <>
      <CookieConsent />
      <ScrollBtn />
    </>
  );
}
