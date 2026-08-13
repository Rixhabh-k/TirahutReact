import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./testimonials.module.css";

const reviews = [
  {
    id: 1,
    color: "#84c664",
    text: "Crispy, tasty, and surprisingly filling. The quality is consistent, and the packaging keeps the makhanas fresh. Great healthy snack for office and travel.",
    name: "Aman Verma",
    location: "Ghaziabad",
  },
  {
    id: 2,
    color: "#C7AEE8",
    text: "Loved the freshness and premium quality. The seasoning is just right, and they're guilt free enough to enjoy every day.",
    name: "Neha Gupta",
    location: "Delhi",
  },
  {
    id: 3,
    color: "#FB8E5E",
    text: "Light, crunchy, and full of flavor. The makhanas taste fresh in every bite, and the resealable pack is really convenient. They've become my go to snack for busy afternoons and long trips.",
    name: "Chirag Sharma",
    location: "Pluto",
  },
];

const GAP = 24;
const SHADOW = 4;

function getCardsPerView(width) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function TestimonialsSection() {
  const viewportRef = useRef(null);
  const [viewport, setViewport] = useState({ cardsPerView: 3, width: 0 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      setViewport({ cardsPerView: getCardsPerView(width), width });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { cardsPerView, width } = viewport;
  const maxIndex = Math.max(0, reviews.length - cardsPerView);
  const currentIndex = Math.min(index, maxIndex);

  const step = width > 0 ? (width - SHADOW + GAP) / cardsPerView : 0;
  const cardWidth = width > 0 ? (width - SHADOW - (cardsPerView - 1) * GAP) / cardsPerView : 0;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.badge}>Loved by our community</div>
          <h2 className={styles.heading}>
            <span className={styles.headingLine}>
              Real People, Real{" "}
              <span className={styles.headingAccent}>
                Love
                <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.viewport} ref={viewportRef}>
            <div
              className={styles.track}
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${-currentIndex * step}px)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={styles.card}
                  style={{
                    backgroundColor: review.color,
                    flex: cardWidth > 0 ? `0 0 ${cardWidth}px` : "0 0 33.333%",
                  }}
                >
                  <div className={styles.quoteMark} aria-hidden="true">
                    &ldquo;
                  </div>
                  <p className={styles.cardQuote}>{review.text}</p>
                  <div className={styles.cardAuthor}>
                    &mdash; {review.name}, {review.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={goPrev}
              aria-label="Previous reviews"
            >
              <FaArrowLeft className={styles.arrowIcon} />
            </button>
            <button
              type="button"
              className={styles.arrow}
              onClick={goNext}
              aria-label="Next reviews"
            >
              <FaArrowRight className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
