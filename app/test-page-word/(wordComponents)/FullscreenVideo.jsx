// components/common/FullscreenVideo.jsx
"use client";
/*
 * Client component: needs browser-only APIs (Fullscreen API) and event
 * handlers, so it is isolated here to let parent sections stay server-rendered.
 *
 * Behaviour:
 * - Inline: autoplays muted on loop with no controls (decorative preview)
 * - Click / Enter / Space: opens full screen with native playback controls
 * - Exiting full screen: hides controls and resumes the muted loop
 */

// React hooks: useRef for direct access to the <video> element,
// useState to toggle controls, useEffect to manage document listeners
import { useEffect, useRef, useState } from "react";

const FullscreenVideo = ({ src, label, width = 640, height = 360 }) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Restores the inline preview state after leaving full screen
  const resetInline = (video) => {
    setIsFullscreen(false);
    video.muted = true;
    // play() returns a promise that rejects if autoplay is blocked; safe to ignore
    video.play().catch(() => {});
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Standard browsers: fires on enter AND exit (including Esc key)
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === video) setIsFullscreen(true);
      else resetInline(video);
    };

    // iOS Safari: native player fires this when the user taps "Done"
    const handleIosExit = () => resetInline(video);

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    video.addEventListener("webkitendfullscreen", handleIosExit);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      video.removeEventListener("webkitendfullscreen", handleIosExit);
    };
  }, []);

  const openFullscreen = () => {
    const video = videoRef.current;
    // Ignore clicks while already full screen so native controls work normally
    if (!video || isFullscreen) return;

    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      // iPhone fallback: opens Safari's native video player
      video.webkitEnterFullscreen();
    }
  };

  // Keyboard support so the video is accessible as a button
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFullscreen();
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      width={width}
      height={height}
      autoPlay
      muted
      loop
      playsInline
      controls={isFullscreen}
      role={isFullscreen ? undefined : "button"}
      tabIndex={isFullscreen ? undefined : 0}
      aria-label={isFullscreen ? label : `${label} – view full screen`}
      onClick={openFullscreen}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FullscreenVideo;
