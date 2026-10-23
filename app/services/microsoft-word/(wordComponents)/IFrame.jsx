import React from "react";
import styles from "../../styles/iframe.module.scss";

const VideoPlayer = () => {
  return (
    <section
      className={styles.videoSection}
      id="video"
      style={{ scrollMarginTop: "-250px" }}
    >
      <div className={styles.sub}>
        <p>Automate Your Workflows</p>
      </div>
      <h2>Unlock the Power of Microsoft Word</h2>
      <p className={styles.description}>
        Learn how our Word Experts consultants automate document workflows,
        enforce corporate branding, and reduce creation time, all through
        templates, toolbars and custom macros. Discover how advanced template
        techniques save your team hours and improve consistency.
      </p>
      <video
        className={styles.video}
        width="70%"
        height="auto"
        controls
        preload="metadata"
      >
        <source src="/videos/word-template-solutions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoPlayer;
