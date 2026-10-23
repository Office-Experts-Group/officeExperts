"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../../components/Contact"));
const CTAMain = dynamic(() => import("../(components)/CTAMain"));

import styles from "../../styles/videoPortal.module.scss";

import {
  videoData,
  categories,
  getFeaturedVideos,
  getVideosByCategory,
  formatDuration,
  getPlainTextPreview,
} from "../../videoData";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

// Generate video schema for each video
const generateVideoSchema = (video) => ({
  "@type": "VideoObject",
  "@id": `https://www.wordexperts.com.au/video-portal#video-${video.id}`,
  name: video.title,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: `PT${video.duration}S`,
  contentUrl: `https://www.wordexperts.com.au${video.videoUrl}`,
  embedUrl: `https://www.wordexperts.com.au${video.videoUrl}`,
  inLanguage: "en-AU",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/video-portal",
      url: "https://www.wordexperts.com.au/video-portal",
      name: "Microsoft Word Video Tutorials | Word Experts Australia",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-10-13T00:00:00+00:00",
      dateModified: "2025-10-13T00:00:00+00:00",
      description:
        "Watch expert video tutorials on Microsoft Word. Learn document automation, template creation, VBA programming, and advanced Word techniques.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/video-portal#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/video-portal"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/video-portal#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Video Portal",
        },
      ],
    },
    {
      "@type": "VideoGallery",
      "@id": "https://www.wordexperts.com.au/video-portal#gallery",
      name: "Word Experts Video Tutorial Library",
      description:
        "Comprehensive video tutorials covering Microsoft Word automation, templates, and advanced features",
      inLanguage: "en-AU",
      video: videoData.map((video) => generateVideoSchema(video)),
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wordexperts.com.au#website",
      url: "https://www.wordexperts.com.au",
      name: "Word Experts Australia",
      description:
        "Australia's leading Microsoft Word specialists, creating custom templates, toolbars, ribbons, and document automation solutions for businesses nationwide.",
      inLanguage: "en-AU",
    },
  ],
};

const VideoPortalPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Filter videos based on search term and selected category
  const filteredVideos = getVideosByCategory(selectedCategory).filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const featuredVideos = getFeaturedVideos();

  // Function to handle video card click - opens modal with video player
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Render video card
  const renderVideoCard = (video, isFeatured = false) => (
    <div
      key={video.id}
      className={isFeatured ? styles.featuredVideoCard : styles.videoCard}
      onClick={() => handleVideoClick(video)}
    >
      <div className={styles.videoImageContainer}>
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          className={styles.videoThumbnail}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={styles.playButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {video.duration > 0 && (
          <span className={styles.duration}>
            {formatDuration(video.duration)}
          </span>
        )}
        <span className={styles.categoryBadge}>{video.category}</span>
      </div>
      <div className={styles.videoContent}>
        <h3>{video.title}</h3>
        {/* Use plain text preview for cards, adjust maxLength as needed */}
        <p className={styles.videoDescription}>
          {getPlainTextPreview(video.description, isFeatured ? 200 : 150)}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.headFiller}></div>
      <div className={styles.videoHeader}>
        <div className={styles.headerContent}>
          <h1>Word Experts Video Tutorials</h1>
          <p>
            Expert video tutorials covering Microsoft Word automation,
            templates, and advanced features
          </p>
        </div>
      </div>

      <div className={styles.videoContainer}>
        {/* Featured videos section */}
        {featuredVideos.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Featured Tutorials</h2>
            <div className={styles.featuredGrid}>
              {featuredVideos.map((video) => renderVideoCard(video, true))}
            </div>
          </section>
        )}

        {/* Search and filter section */}
        <section className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All videos section */}
        <section className={styles.allVideosSection}>
          <h2>All Tutorials</h2>
          {filteredVideos.length === 0 ? (
            <div className={styles.noResults}>
              <p>
                No videos found matching your criteria. Please try a different
                search term or category.
              </p>
            </div>
          ) : (
            <div className={styles.videosGrid}>
              {filteredVideos.map((video) => renderVideoCard(video))}
            </div>
          )}
        </section>

        <div className={styles.ctaContainer}>
          <div style={{ marginTop: "4rem" }}>
            <CTAMain />
          </div>
        </div>
      </div>

      {/* Video Modal with HTML5 Video Player */}
      {selectedVideo && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeVideoModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.videoWrapper}>
              <video
                controls
                autoPlay
                className={styles.videoPlayer}
                poster={selectedVideo.thumbnailUrl}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.videoInfo}>
              <h3>{selectedVideo.title}</h3>
              <div
                className={styles.videoDescription}
                dangerouslySetInnerHTML={{ __html: selectedVideo.description }}
              />
            </div>
          </div>
        </div>
      )}

      <Contact />
    </>
  );
};

export default VideoPortalPage;
