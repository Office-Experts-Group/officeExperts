"use client";

import React, { useState } from "react";
import styles from "../../../../../styles/videoSegment.module.css";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

const VideoSegment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoURL = "https://player.vimeo.com/video/286127973?h=12b183a3fa";

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Watch a Demo</p>
          <h2 className={styles.title}>Power BI Dashboard</h2>
          <p className={styles.description}>
            Our talented team have built many dashboard solutions in Power BI
            including the one shown in this demo video.
          </p>
          <p className={styles.description}>
            Our experts are ready to talk through your requirements and advise
            the best reporting solution for you.
          </p>
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
