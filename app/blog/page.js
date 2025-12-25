"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Contact from "../../components/Contact";
import CTAMain from "../(components)/CTAMain";

import styles from "../../styles/blog.module.scss";

import { blogPosts } from "./blogPosts";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/blog",
      url: "https://www.officeexperts.com.au/blog",
      name: "Excel Experts Australia Blog",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-02-12T00:00:00+00:00",
      description:
        "Explore in-depth tutorials, tips, and best practices for mastering advanced Microsoft software techniques, including Excel, Power BI, Word, and more.",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/blog#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/blog"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/blog#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
        },
      ],
    },
    {
      "@type": "Blog",
      "@id": "https://www.officeexperts.com.au/blog#blog",
      url: "https://www.officeexperts.com.au/blog",
      name: "Office Experts Australia Blog",
      description:
        "Expert tutorials, tips, and best practices for Microsoft Office",
      inLanguage: "en-AU",
      publisher: {
        "@type": "Organization",
        name: "Office Experts Australia",
        url: "https://www.officeexperts.com.au",
        logo: {
          "@type": "ImageObject",
          url: "https://www.officeexperts.com.au/logo.png",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au#website",
      url: "https://www.officeexperts.com.au",
      name: "Office Experts Australia",
      description:
        "Explore in-depth tutorials, tips, and best practices for mastering advanced Microsoft software techniques, including Excel, Power BI, Word, and more.",
      inLanguage: "en-AU",
    },
  ],
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Function to get the correct image source for a post
  const getImageSource = (post) => {
    if (post.youtubeId) {
      return `https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`;
    } else if (post.imagePath) {
      return post.imagePath;
    }
    // Fallback image if neither youtubeId nor imagePath is available
    return "/blog/fallback.webp";
  };

  // Function to render a card (used for both featured and regular posts)
  const renderPostCard = (post, isFeatured = false) => (
    <Link
      href={post.slug}
      key={post.id}
      className={isFeatured ? styles.featuredPostCard : styles.postCard}
    >
      <div className={styles.postImageContainer}>
        <Image
          src={getImageSource(post)}
          alt={post.title}
          className={styles.postImage}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={styles.categoryBadge}>{post.category}</span>
      </div>
      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.headFiller}></div>
      <div className={styles.blogHeader}>
        <div className={styles.headerContent}>
          <h1>Office Experts Blog</h1>
          <p>Expert tutorials, tips, and best practices for Microsoft Office</p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        {/* Featured posts section */}
        {featuredPosts.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Featured Articles</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => renderPostCard(post, true))}
            </div>
          </section>
        )}

        {/* Search and filter section */}
        <section className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              list="searchList"
            />
            <datalist id="searchList">
              {blogPosts.map((post) => (
                <option key={post.id} value={post.title} />
              ))}
            </datalist>
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

        {/* All posts section */}
        <section className={styles.allPostsSection}>
          <h2>All Articles</h2>
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>
                No articles found matching your criteria. Please try a different
                search term or category.
              </p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {filteredPosts.map((post) => renderPostCard(post))}
            </div>
          )}
        </section>
        <div className={styles.ctaContainer}>
          <CTAMain />
        </div>
      </div>

      <Contact />
    </>
  );
};

export default BlogPage;
