// FlipBookUsage.jsx — example usage in a Next.js 14 page or component
// Drop this into any page/component and adjust as needed.

import FlipBook from "@/components/FlipBook/FlipBook";

// Import your webp images — Next.js handles static import sizing automatically
import page1 from "@/public/books/environment/page1.webp";
import page2 from "@/public/books/environment/page2.webp";
import page3 from "@/public/books/environment/page3.webp";
import page4 from "@/public/books/environment/page4.webp";
import page5 from "@/public/books/environment/page5.webp";
import page6 from "@/public/books/environment/page6.webp";

// ─── Full-page feature (hero / standalone section) ───────────────────────────
export function FullPageBook() {
  return (
    <section>
      <FlipBook
        images={[page1, page2, page3, page4, page5, page6]}
        size="full"
        scrollOffset={100} // px of scroll to trigger a page turn
        animDuration={900} // ms for the flip animation
      />
    </section>
  );
}

// ─── Half-page feature (inside a two-column layout) ──────────────────────────
export function HalfPageBook() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
    >
      <div>
        <h2>Our Environment</h2>
        <p>Browse through our environmental impact report.</p>
      </div>
      <FlipBook
        images={[page1, page2, page3, page4, page5, page6]}
        size="half"
        scrollOffset={80}
        animDuration={800}
      />
    </div>
  );
}

// ─── Wrapped with AnimateOnScroll (entry animation for the whole book) ────────
// AnimateOnScroll triggers once when the component enters the viewport.
// The flip interactions still work normally after the entry animation.
import AnimateOnScroll from "@/components/AnimateOnScroll";

export function AnimatedBook() {
  return (
    <AnimateOnScroll animation="fade-up" duration={0.8}>
      <FlipBook
        images={[page1, page2, page3, page4, page5, page6]}
        size="full"
      />
    </AnimateOnScroll>
  );
}
