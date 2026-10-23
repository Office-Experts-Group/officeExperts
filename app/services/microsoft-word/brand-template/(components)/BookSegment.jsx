import React from "react";

import FlipBook from "../../../components/FlipBook";

import styles from "../../../styles/flipBook.module.scss";

import page1 from "../../../public/books/proposal/page1.webp";
import page2 from "../../../public/books/proposal/page2.webp";
import page3 from "../../../public/books/proposal/page3.webp";
import page4 from "../../../public/books/proposal/page4.webp";
import page5 from "../../../public/books/proposal/page5.webp";
import page6 from "../../../public/books/proposal/page6.webp";
import page7 from "../../../public/books/proposal/page7.webp";
import page8 from "../../../public/books/proposal/page8.webp";
import page9 from "../../../public/books/proposal/page9.webp";
import page10 from "../../../public/books/proposal/page10.webp";
import page11 from "../../../public/books/proposal/page11.webp";

const BookSegment = () => {
  return (
    <div className={styles.bookSegment} style={{ scrollMarginTop: "100px" }}>
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
        ]}
        size="full"
        scrollOffset={50} // px of scroll to trigger a page turn
        animDuration={900} // ms for the flip animation
      />
    </div>
  );
};

export default BookSegment;
