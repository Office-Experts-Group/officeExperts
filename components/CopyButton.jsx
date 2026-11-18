// /components/CopyButton.jsx
"use client";

import { useEffect, useRef, useState } from "react";

import styles from "@/styles/codeBlock.module.scss";

// Uses the Clipboard API when available, falls back to a hidden textarea so it
// still works on plain http, older browsers and some in-app browsers.
async function copyText(text) {
  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    window.isSecureContext
  ) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the textarea fallback
    }
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  area.setSelectionRange(0, text.length);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export default function CopyButton({ text }) {
  const [state, setState] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async () => {
    const ok = await copyText(text);
    setState(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  };

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy";

  return (
    <button
      type="button"
      className={`${styles.copy} ${state === "copied" ? styles.copied : ""}`.trim()}
      onClick={handleClick}
    >
      {label}
      <span className={styles.srOnly} role="status" aria-live="polite">
        {state === "copied" ? "Code copied to clipboard" : ""}
      </span>
    </button>
  );
}
