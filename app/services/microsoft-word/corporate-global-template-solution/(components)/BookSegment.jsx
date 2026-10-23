import React from "react";

import FlipBook from "../../../components/FlipBook";

import styles from "../../../styles/flipBook.module.scss";

import page1 from "../../../public/books/coral/page1.webp";
import page2 from "../../../public/books/coral/page2.webp";
import page3 from "../../../public/books/coral/page3.webp";
import page4 from "../../../public/books/coral/page4.webp";
import page5 from "../../../public/books/coral/page5.webp";
import page6 from "../../../public/books/coral/page6.webp";
import page7 from "../../../public/books/coral/page7.webp";
import page8 from "../../../public/books/coral/page8.webp";
import page9 from "../../../public/books/coral/page9.webp";
import page10 from "../../../public/books/coral/page10.webp";
import page11 from "../../../public/books/coral/page11.webp";
import page12 from "../../../public/books/coral/page12.webp";
import page13 from "../../../public/books/coral/page13.webp";

const BookSegment = () => {
  return (
    <div
      className={styles.bookSegment}
      id="template-services"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2>Professional Document Template Services</h2>
      <p>
        With Word Experts, your not just getting a template, your getting a long
        term solution for consistent branding, efficient workflows and polished
        communication. Every document your team creates will be consistently
        visually striking, professionally formatted and hassle free.
      </p>
      <FlipBook
        images={[
          page1,
          page2,
          page3,
          page4,
          page5,
          page6,
          page7,
          page8,
          page9,
          page10,
          page11,
          page12,
          page13,
        ]}
        size="full"
        scrollOffset={50} // px of scroll to trigger a page turn
        animDuration={900} // ms for the flip animation
      />
    </div>
  );
};

export default BookSegment;
