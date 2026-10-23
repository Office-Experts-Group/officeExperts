import React from "react";

import FlipBook from "../../../components/FlipBook";

import styles from "../../../styles/flipBook.module.scss";

import page1 from "../../../public/books/startup/page1.webp";
import page2 from "../../../public/books/startup/page2.webp";
import page3 from "../../../public/books/startup/page3.webp";
import page4 from "../../../public/books/startup/page4.webp";
import page5 from "../../../public/books/startup/page5.webp";
import page6 from "../../../public/books/startup/page6.webp";
import page7 from "../../../public/books/startup/page7.webp";
import page8 from "../../../public/books/startup/page8.webp";
import page9 from "../../../public/books/startup/page9.webp";
import page10 from "../../../public/books/startup/page10.webp";
import page11 from "../../../public/books/startup/page11.webp";
import page12 from "../../../public/books/startup/page12.webp";
import page13 from "../../../public/books/startup/page13.webp";
import page14 from "../../../public/books/startup/page14.webp";
import page15 from "../../../public/books/startup/page15.webp";
import page16 from "../../../public/books/startup/page16.webp";
import page17 from "../../../public/books/startup/page17.webp";

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
          page12,
          page13,
          page14,
          page15,
          page16,
          page17,
        ]}
        size="full"
        scrollOffset={50} // px of scroll to trigger a page turn
        animDuration={900} // ms for the flip animation
      />
    </div>
  );
};

export default BookSegment;
