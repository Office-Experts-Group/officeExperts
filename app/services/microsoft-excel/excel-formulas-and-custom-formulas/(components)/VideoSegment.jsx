"use client";
import React, { useState } from "react";

import styles from "../../../../../styles/videoSegment.module.css";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

const VideoSegment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoURL = "https://player.vimeo.com/video/294497327?h=c55bd1bb94";

  return (
    <section className={styles.container} style={{ paddingBottom: "6rem" }}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Watch a Demo</p>
          <h2 className={styles.title}>Excel Custom Formulas</h2>
        </div>

        <AnimateOnScroll animation="scale-up" duration={1}>
          <div className={styles.videoWrapper}>
            {isLoading && (
              <div className={styles.loader}>
                <div className={styles.spinner}></div>
              </div>
            )}
            <iframe
              src={videoURL}
              className={styles.iframe}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Excel Custom Formulas Demo"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default VideoSegment;
