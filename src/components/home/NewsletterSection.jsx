import React from "react";
import FillImage from "../FillImage";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./newsletter.module.css";

const leftImages = [
  { src: "/images/Makhana.png", className: styles.leftMakhana1 },
  { src: "/images/Makhana2.png", className: styles.leftMakhana2 },
];

const rightImages = [
  { src: "/images/makhana3.png", className: styles.rightMakhana1 },
  { src: "/images/makhana4.png", className: styles.rightMakhana2 },
  { src: "/images/makhana5.png", className: styles.rightMakhana3 },
];

export default function NewsletterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.sideLeft}>
            <div className={`${styles.planeWrap} ${styles.leftPlane}`}>
              <FaPaperPlane className={styles.plane} aria-hidden="true" />
            </div>
            {leftImages.map((img) => (
              <div key={img.src} className={`${styles.makhanaWrap} ${img.className}`}>
                <FillImage
                  src={img.src}
                  alt=""
                  className={styles.makhana}
                />
              </div>
            ))}
          </div>

          <div className={styles.headingWrap}>
            <h2 className={styles.heading}>
              Join the <span className={styles.headingAccent}>Healthy Snacking Club!</span>
            </h2>
            <p className={styles.subtitle}>
              Get exclusive offers, new flavors,
              <br />
              and healthy tips straight to your inbox
            </p>
          </div>

          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className={styles.input}
                aria-label="Enter Your Email"
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>

          <div className={styles.sideRight}>
            {rightImages.map((img) => (
              <div key={img.src} className={`${styles.makhanaWrap} ${img.className}`}>
                <FillImage
                  src={img.src}
                  alt=""
                  className={styles.makhana}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
