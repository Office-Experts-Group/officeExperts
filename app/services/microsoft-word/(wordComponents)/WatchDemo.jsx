// app/services/microsoft-word/(components)/WatchDemo.jsx
"use client";
/*
 * Client component: needs the Fullscreen API and a click handler, so it is
 * isolated here to let the parent Services section stay server-rendered.
 *
 * Behaviour:
 * - Renders a pill button with a play icon; the video is hidden and not
 *   downloaded (preload="none") until the button is clicked
 * - Click: plays the demo full screen with native controls
 * - Exiting full screen: pauses and rewinds the video
 */

// useRef gives direct access to the <video> element,
// useEffect manages the document-level fullscreen listeners
import { useEffect, useRef } from "react";

import styles from "@/styles/watchDemo.module.scss";

const WatchDemo = ({ src, text = "Watch a demo" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Hides controls, pauses and rewinds so the next open starts from the top
    const reset = () => {
      video.controls = false;
      video.pause();
      video.currentTime = 0;
    };

    // Standard browsers: fires on enter AND exit (including Esc key)
    const handleFullscreenChange = () => {
      if (document.fullscreenElement !== video) reset();
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    // iOS Safari: native player fires this when the user taps "Done"
    video.addEventListener("webkitendfullscreen", reset);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      video.removeEventListener("webkitendfullscreen", reset);
    };
  }, []);

  const openDemo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;
    // play() returns a promise that rejects if blocked; safe to ignore
    video.play().catch(() => {});

    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      // iPhone fallback: opens Safari's native video player
      video.webkitEnterFullscreen();
    }
  };

  return (
    <>
      <button
        type="button"
        className={styles.demo}
        onClick={openDemo}
        aria-label={`${text} – opens video full screen`}
      >
        <span className={styles.icon} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M3.5 1.8v10.4a.6.6 0 0 0 .9.5l8.4-5.2a.6.6 0 0 0 0-1L4.4 1.3a.6.6 0 0 0-.9.5Z" />
          </svg>
        </span>
        {text}
      </button>
      <video
        ref={videoRef}
        className={styles.video}
        preload="none"
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/word-template-solutions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default WatchDemo;
